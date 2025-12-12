import{j as r,r as F}from"./iframe-DNac-Rqf.js";import{L as l}from"./Label-CblnI0HW.js";import{q as t,v as f,g as h}from"./TimeField-DpY9PVqh.js";import{B as o}from"./Button-CUSLqQMc.js";import{S as x}from"./Section-DvtlFJN0.js";import{g as S,B as j}from"./IconWarning-Cg768Zjl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-C_xkOl2m.js";import"./mergeRefs-CMWgjpmK.js";import"./index--GDWo6c1.js";import"./useLocalizedStringFormatter-BLbNTQNm.js";import"./context-g2-sYTkT.js";import"./ProgressBar-Cg_AUX6O.js";import"./utils-BduO7XRu.js";import"./Hidden-DGwLcp0N.js";import"./filterDOMProps-i7L6S0l1.js";import"./Accordion-BpjGjdfu.js";import"./dynamic-DYsIbK1A.js";import"./ActionGroup-HKL5W0AJ.js";import"./Alert-C4SmUy15.js";import"./AlertIcon-BCoAEyQh.js";import"./AlertBadge-B4Gw2oem.js";import"./Text-D0ZE_3Re.js";import"./browser-nJ4CE5Oc.js";import"./EmulatedBoldText-Dq-fgG2H.js";import"./Align-BYSxjVaI.js";import"./Popover-Cv71dRgv.js";import"./context-CZdohShl.js";import"./Button-jJfhABmc.js";import"./useFocusRing-Dh9thb9f.js";import"./useFocusable-rb0lSnzN.js";import"./RSPContexts-Cd6lFFaf.js";import"./Collection-igBrAvIn.js";import"./CollectionBuilder-qxwNBjxK.js";import"./SelectionIndicator-C4Ae8ohN.js";import"./Separator-DHka8Fv6.js";import"./useStatic-ihim0ckM.js";import"./OverlayTrigger-BBjUB5WE.js";import"./TableFooterRow-TOZfCvNN.js";import"./SkeletonText-Dtz0dWFM.js";import"./Avatar-C3ls42ZT.js";import"./AvatarStack-CB7huUjR.js";import"./Badge-BTPi5GTz.js";import"./BigNumber-C6J1IAVW.js";import"./Breadcrumb-CusU5TRR.js";import"./Link-Ddteou-D.js";import"./Heading-B9C-Q8d_.js";import"./Legend-C843Nwot.js";import"./FileCardList-C3A0Rc32.js";import"./Image-D-F7EiiO.js";import"./Color-DOa8qdv1.js";import"./Content-ze7-zRt3.js";import"./ContextualHelpTrigger-BMAda_hh.js";import"./CounterBadge-BP5WHUxC.js";import"./remote-DNzJzz_i.js";import"./DonutChart-ChhISA-m.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-B3WFXRVC.js";import"./Header-D32huwY0.js";import"./Initials-By4hdRc1.js";import"./InlineCode-BSZYsfjr.js";import"./PopoverTrigger-CtfZ1cKH.js";import"./LoadingSpinner-lobDwtPy.js";import"./Separator-T5QLy1gm.js";import"./Message-B9f-cPpE.js";import"./MessageSeparator-C2jALfgb.js";import"./NavigationGroup-D3e0XJsj.js";import"./Notification-BzWIEsEu.js";import"./NotificationProvider-BnmgoZU5.js";import"./ProgressBar-DEEkwCFH.js";import"./Rating-C_CSOchR.js";import"./Skeleton-CSWR-u_J.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),zr={title:"Form Controls/FileField",component:t,render:e=>r.jsxs(t,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(t,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(f,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(t,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(t,{...e,children:r.jsx(o,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(x,{children:[r.jsxs(t,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldDescription>Supported formats: .pem, .pfx</FieldDescription>
    </FileField>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => <FileField {...props} isInvalid>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldError>File too large</FieldError>
    </FileField>
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Button variant="soft" aria-label="Select certificate">
        <Icon>
          <IconPaperclip />
        </Icon>
      </Button>
    </FileField>
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    const file = files?.[0];
    return <Section>
        <FileField {...props} onChange={setFiles}>
          <Label>Certificate</Label>
          <Button variant="outline" color="secondary">
            Select
          </Button>
        </FileField>
        {file?.name}
      </Section>;
  }
}`,...c.parameters?.docs?.source}}};const Ar=["Default","ReadOnly","WithDescription","WithError","IconButton","WithHandler"];export{i as Default,p as IconButton,n as ReadOnly,s as WithDescription,a as WithError,c as WithHandler,Ar as __namedExportsOrder,zr as default};
