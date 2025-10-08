import{j as r,r as V}from"./iframe-7dgBHkjI.js";import{M as e}from"./MarkdownEditor-C7_ON9WF.js";import{L as l}from"./Label-BOtdfEdH.js";import{F as _}from"./FieldError-XEHbUqlq.js";import{B as A}from"./Button-C4xC-ENb.js";import{S as H}from"./Section-BTwbdvzE.js";import"./index-Cun1SEai.js";import"./Markdown-ClZNtaaH.js";import"./CodeBlock-ty3ydZfF.js";import"./clsx-B-dksMZM.js";import"./CopyButton-B1wB9Kwn.js";import"./IconWarning-CHzLfKjq.js";import"./flowComponent-BTLDR_wZ.js";import"./index-gL3AvcBv.js";import"./index-DzRRQR_A.js";import"./Tooltip-DKY9IbaO.js";import"./ClearPropsContextView-Dl-zrP-C.js";import"./utils-skLZq2rT.js";import"./OverlayArrow-CimrvBmG.js";import"./useFocus-BVcT7Cmq.js";import"./ProgressBar-m_J970Ss.js";import"./Label-DDrFPz8N.js";import"./Hidden-C8BM-Xlw.js";import"./filterDOMProps-CghfNOdR.js";import"./context-DLyAckLP.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-U7vX1g_u.js";import"./useFocusable-CjOl0zdL.js";import"./useFocusRing-DpIlZv5r.js";import"./react-children-utilities-BfAujq-x.js";import"./Action-aBxNfjGZ.js";import"./context-CM0pxKNs.js";import"./useStatic-BofYKATW.js";import"./browser-BYuTkZ2t.js";import"./getActionGroupSlot-p5Itb_hd.js";import"./dynamic-3ixFNiB4.js";import"./useLocalizedStringFormatter-ihca5feJ.js";import"./Heading-DA-R3l6v.js";import"./Heading-C_3CsfJi.js";import"./RSPContexts-DU60rLWV.js";import"./InlineCode-CiiUEjDD.js";import"./Link-rF8V2HfC.js";import"./usePress-C40tO5Ld.js";import"./Separator-X6ee7dn9.js";import"./Separator-zM5l-9RV.js";import"./CollectionBuilder-BVEyhuGf.js";import"./Text-CPbpE1eA.js";import"./EmulatedBoldText-wnDp19Ns.js";import"./Text-CcEbIf7j.js";import"./TextArea-B9ngoT2C.js";import"./TextFieldBase-CDrFv569.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-HgH3Q7pf.js";import"./TextField-DOVBWSoz.js";import"./FieldError-DQvJzSCl.js";import"./context-CWPPwc3G.js";import"./Form-emkFOLws.js";import"./Group-Bn60iEKX.js";import"./Input-pFk5V5wL.js";import"./useTextField-B_VR62Ms.js";import"./useFormReset-DcXBOsyZ.js";import"./useFormValidation-lhUbjjow.js";import"./ReactAriaControlledValueFix-IHuL5Gc3.js";import"./useManagedValue-OgtglwQ-.js";import"./LoadingSpinner-BhdyCwx7.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DA_owd3b.js";import"./ContextMenuSection-P3ZBunxW.js";import"./Dialog-RmwKLDR6.js";import"./Collection-BoyNLLEq.js";import"./SelectionManager-CRbs3IKU.js";import"./useEvent-CJDlXvBr.js";import"./useCollator-aaYKjyL1.js";import"./FocusScope-iWt5Cohm.js";import"./VisuallyHidden-DxfkSq7z.js";const mo={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(_,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=V.useRef(null),T=()=>{t.current&&t.current.focus()};return r.jsxs(H,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(A,{type:"button",onClick:T,children:"Set focus"})]})}};var u,h,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,x,M;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(M=(x=a.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var E,w,b;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props}>
      <Label>Message</Label>
    </MarkdownEditor>
}`,...(b=(w=i.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var R,S,C;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 100
  }
}`,...(C=(S=n.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var j,L,k;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props} isInvalid defaultValue="hello">
      <FieldError>Invalid message</FieldError>
    </MarkdownEditor>
}`,...(k=(L=p.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var F,W,v;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...(v=(W=m.parameters)==null?void 0:W.docs)==null?void 0:v.source}}};var D,z,B;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: props => {
    return <MarkdownEditor {...props} onChange={v => console.log(v)}>
        <Label>Message</Label>
      </MarkdownEditor>;
  }
}`,...(B=(z=c.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var I,O,y;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: props => {
    const editorRef = useRef<HTMLTextAreaElement | null>(null);
    const handleFocus = () => {
      if (editorRef.current) {
        editorRef.current.focus();
      }
    };
    return <Section>
        <MarkdownEditor {...props} ref={editorRef}>
          <Label>Message</Label>
        </MarkdownEditor>
        <Button type="button" onClick={handleFocus}>
          Set focus
        </Button>
      </Section>;
  }
}`,...(y=(O=d.parameters)==null?void 0:O.docs)==null?void 0:y.source}}};const co=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","Resizeable","WithOnChange","WithRef"];export{s as Default,a as Disabled,m as Resizeable,n as ShowCharacterCount,p as WithFieldError,i as WithLabel,c as WithOnChange,d as WithRef,co as __namedExportsOrder,mo as default};
