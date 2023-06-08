import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
const PdfDocument = () => {
    const styles = StyleSheet.create({
      page: {
        flexDirection: 'column',
        backgroundColor: '#E4E4E4',
        padding: 20,
      },
      section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
      },
      headerSection: {
        backgroundColor: '#f0ad4e',
      },
      bodySection: {
        backgroundColor: '#5bc0de',
      },
    });
  
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={[styles.section, styles.headerSection]}>
            <Text>Header</Text>
          </View>
          <View style={[styles.section, styles.bodySection]}>
            <Text>Body Content</Text>
          </View>
        </Page>
      </Document>
    );
  };

  export default PdfDocument;