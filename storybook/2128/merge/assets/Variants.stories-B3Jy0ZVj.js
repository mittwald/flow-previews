import{j as e}from"./iframe-RkNYvT67.js";import{A as n}from"./Alert-D3bKy03a.js";import{H as i}from"./Heading-4A_9k7B7.js";import{C as d}from"./Content-CugomRfa.js";import p from"./Default.stories-DzM9BZ-t.js";import"./index-nuYtCEEu.js";import"./AlertIcon-Dfi2fKkE.js";import"./IconWarning-Bv_c0irh.js";import"./clsx-B-dksMZM.js";import"./flowComponent-t1J_uYA_.js";import"./index-BXAy4ZoD.js";import"./index-CYuD20gW.js";import"./useLocalizedStringFormatter-CZYF-KE5.js";import"./context-DpnYhhMC.js";import"./dynamic-D525euPD.js";import"./RSPContexts-iWdoYzW5.js";import"./utils-Cw0V24oX.js";import"./Text-CGI13fZ7.js";import"./browser-O08qKn7T.js";import"./EmulatedBoldText-wSSRmDQ8.js";import"./Button-Cq2sGnot.js";import"./LoadingSpinner-C8ge1gn9.js";import"./Button-BaIk0AjS.js";import"./ProgressBar-DatwHdcd.js";import"./Hidden-DglwBjTS.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-zSkRpitG.js";import"./useFocusable-Cc38Xz3k.js";import"./ActionGroup-U66WTNaW.js";import"./Section-C9URTgx-.js";import"./context-QFyIn5AW.js";import"./Collection-Dn2VpDMj.js";import"./CollectionBuilder-G2QPbUNk.js";import"./SelectionIndicator-ygw8vgtw.js";import"./Separator-AC7DyvUW.js";import"./useStatic-DSkca5nN.js";import"./LayoutCard-552oNMIB.js";import"./dummyText-CX_I_Wpl.js";const M={...p,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <Alert {...props}>
      <Heading>Email address has been archived</Heading>
      <Content>
        As your domain has been deleted, this email address has been archived.
        To be able to send and receive emails, you must rename the address.
      </Content>
    </Alert>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    status: "warning"
  },
  render: props => <Alert {...props}>
      <Heading>Storage is almost exceeded</Heading>
      <Content>
        Your storage space is over 80% utilized. We recommend that you upgrade
        the storage space to avoid disruptions during backups.
      </Content>
    </Alert>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    status: "danger"
  },
  render: props => <Alert {...props}>
      <Heading>No SSL certificate could be issued</Heading>
      <Content>
        No SSL certificate could be issued for this domain because the domain IP
        does not point to your server IP.
      </Content>
    </Alert>
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    status: "success"
  },
  render: props => <Alert {...props}>
      <Heading>Your app is up to date</Heading>
      <Content>Your app has been updated to the current version.</Content>
    </Alert>
}`,...a.parameters?.docs?.source}}};const Q=["Info","Warning","Danger","Success"];export{o as Danger,s as Info,a as Success,t as Warning,Q as __namedExportsOrder,M as default};
