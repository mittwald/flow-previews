import{j as r,r as V}from"./iframe-tskdVQ8N.js";import{M as e}from"./MarkdownEditor-DeQBWDh-.js";import{L as l}from"./Label-CsJ7Xmev.js";import{F as _}from"./FieldError-BdEz1ju8.js";import{B as A}from"./Button-Dsg_4rdI.js";import{S as H}from"./Section-O741B4-H.js";import"./index-Cun1SEai.js";import"./Markdown-C6Whzq92.js";import"./CodeBlock-BvO_QA47.js";import"./clsx-B-dksMZM.js";import"./CopyButton-bKHzDnC_.js";import"./IconWarning-Bd2S-Yd8.js";import"./flowComponent-DXfmr-ai.js";import"./index-D6N0AnTm.js";import"./index-C1m14znk.js";import"./Tooltip-D32O0Uqd.js";import"./ClearPropsContextView-CYMEx9M6.js";import"./utils-B12eWPaZ.js";import"./OverlayArrow-CQI9fhos.js";import"./useFocus-DfZ-8u74.js";import"./ProgressBar-rxfhBUJO.js";import"./Label-ZNOxXk3Q.js";import"./Hidden-D_rJ6hGg.js";import"./filterDOMProps-CghfNOdR.js";import"./context-DiW1jRMX.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Py7g_hCX.js";import"./useFocusable-DY9nb4Q3.js";import"./useFocusRing-L-u3dQN8.js";import"./react-children-utilities-BBLiK6rG.js";import"./Action-CeCtXdjv.js";import"./context-CVZR0KsW.js";import"./useStatic-1YPHy18H.js";import"./browser-C459Qnce.js";import"./getActionGroupSlot-CxSNR9ht.js";import"./dynamic-BrDu037J.js";import"./useLocalizedStringFormatter-B-RI6mzv.js";import"./Heading-DLxD6IRh.js";import"./Heading-DLcHG4v5.js";import"./RSPContexts-w3AEViLT.js";import"./InlineCode-D-O4POyz.js";import"./Link-iA3tKyOY.js";import"./usePress-BvJ9VF5d.js";import"./Separator-CKMm-fUH.js";import"./Separator-N_51tPRN.js";import"./CollectionBuilder-B0ypalQC.js";import"./Text-jVUpGvvP.js";import"./EmulatedBoldText-BMIw02bL.js";import"./Text-DKYFQica.js";import"./TextArea-4xftLeWC.js";import"./TextFieldBase-B_eNjkkd.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-B2j6G7O5.js";import"./TextField-qs-UTjJy.js";import"./FieldError-BQtr77Yc.js";import"./Form-r-7bApRf.js";import"./Group-BxNa3NfW.js";import"./Input-D8C7sCTv.js";import"./useTextField-v5hGozoz.js";import"./useFormReset-D7H6HyHT.js";import"./useFormValidation-GdVWjc_V.js";import"./ReactAriaControlledValueFix-C-rmsYnN.js";import"./useManagedValue-DS7RTteu.js";import"./LoadingSpinner-DLMtzbRX.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DB-V2NKd.js";import"./ContextMenuSection-DqvIY19i.js";import"./Dialog-D58MUJ_9.js";import"./Collection-BQ6XNSlA.js";import"./SelectionIndicator-By4SQJVw.js";import"./SelectionManager-6kMjKjHw.js";import"./useEvent-r3YrjOS6.js";import"./useCollator-BdaohURQ.js";import"./FocusScope-D_vsK9iJ.js";import"./VisuallyHidden-BVBeKb2k.js";const mo={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(_,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=V.useRef(null),T=()=>{t.current&&t.current.focus()};return r.jsxs(H,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(A,{type:"button",onClick:T,children:"Set focus"})]})}};var u,h,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,x,M;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
