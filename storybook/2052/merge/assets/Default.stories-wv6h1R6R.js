import{j as r,r as V}from"./iframe-CBVsO-nV.js";import{M as e}from"./MarkdownEditor-DbVx5hB0.js";import{L as l}from"./Label-nyljzuzS.js";import{F as _}from"./useFieldComponent-BL--pJL1.js";import{B as A}from"./Button-CsBApO8I.js";import{S as H}from"./Section-B5x6AEB8.js";import"./index-Cun1SEai.js";import"./Markdown-tOQ8JuAs.js";import"./CodeBlock-C_zkYCfr.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BcjeaEgI.js";import"./IconWarning-BYVfnYfe.js";import"./flowComponent-DToNFNtJ.js";import"./index-7tOde82V.js";import"./index-CObDYv0S.js";import"./Tooltip-xg6PcfMV.js";import"./ClearPropsContextView-QpnEsTY7.js";import"./ClearPropsContext-5iY_SzG7.js";import"./utils-BP7SriO_.js";import"./OverlayArrow-D5IM8mFd.js";import"./useFocus-DaXdFBHM.js";import"./ProgressBar-I-zazMLu.js";import"./Label-Bbbf1klh.js";import"./Hidden-CLTlUYi-.js";import"./filterDOMProps-CghfNOdR.js";import"./context-DPyuhdQa.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CX82Bv9G.js";import"./useFocusable-BZqSTg_W.js";import"./useFocusRing-CMejcKZt.js";import"./react-children-utilities-Da5w6g_X.js";import"./Action-D49cMU0u.js";import"./context-BHCJLPq_.js";import"./useStatic-B-RdiA9k.js";import"./browser-C8nzMZsV.js";import"./getActionGroupSlot-Dv-xsI8W.js";import"./dynamic-B9g8bFyj.js";import"./useLocalizedStringFormatter-BV-H-cPE.js";import"./Heading-CaqOKZxe.js";import"./Heading-Dr3JxnqR.js";import"./RSPContexts-DsHkjJhu.js";import"./InlineCode-kdaxCDS8.js";import"./Link-CXp1Cv70.js";import"./usePress-tISAzguc.js";import"./Separator-bajjfHtH.js";import"./Separator-Cet5gXTt.js";import"./CollectionBuilder-Dw4MtH9U.js";import"./Text-4FHUoZpl.js";import"./EmulatedBoldText-oVXJv8rD.js";import"./Text-GjNUVhom.js";import"./TextArea-9jAb8Zsp.js";import"./TextFieldBase-CbPsOKju.js";import"./FieldDescription-BsgENOjc.js";import"./TextField-Bk_yv6i3.js";import"./Form-CSBASJMX.js";import"./Group-Cz9MSlsI.js";import"./Input-Bo67AZIS.js";import"./useTextField-Dmd_cSub.js";import"./useFormReset-0NTNnrBe.js";import"./useFormValidation-DWnxi1QZ.js";import"./ReactAriaControlledValueFix-DsZdc0Eu.js";import"./useManagedValue-C-46omYf.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-B8NSHT58.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-4bPWs-y1.js";import"./ContextMenuSection-CKXjql2z.js";import"./Dialog-CSsaqFoB.js";import"./Collection-D1Yf9Sy6.js";import"./SelectionIndicator-DFyYkHVA.js";import"./SelectionManager-BHGqi2o_.js";import"./useEvent-51-loX5F.js";import"./useCollator-CcT-BTV3.js";import"./FocusScope-B4rhd8wm.js";import"./VisuallyHidden-OgSsWZyt.js";const mo={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(_,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=V.useRef(null),T=()=>{t.current&&t.current.focus()};return r.jsxs(H,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(A,{type:"button",onClick:T,children:"Set focus"})]})}};var u,h,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,x,M;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
