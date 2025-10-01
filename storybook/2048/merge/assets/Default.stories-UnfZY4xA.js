import{j as r,r as V}from"./iframe-BdvCKsbF.js";import{M as e}from"./MarkdownEditor-BmZXHAa3.js";import{L as l}from"./Label-669hhtQM.js";import{F as _}from"./FieldError-CdPfgsKF.js";import{B as A}from"./Button-CEcdxUV1.js";import{S as H}from"./Section-Jzko1FZT.js";import"./index-Cun1SEai.js";import"./Markdown-CJgiGvvy.js";import"./CodeBlock-DAsnFJGn.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DWmmwNWE.js";import"./IconWarning-P52nLd_s.js";import"./flowComponent-pHCscBgm.js";import"./index-CcTYzsK6.js";import"./index-nNeao2-W.js";import"./Tooltip-DB4TIPCf.js";import"./ClearPropsContextView-Cu9Qi4Nq.js";import"./utils-BbupUKpI.js";import"./OverlayArrow-Ck2ASDGt.js";import"./useFocus-BlE0zHW0.js";import"./ProgressBar-kDZvVta4.js";import"./Label-6ghd3nSI.js";import"./Hidden-DHl5AEyE.js";import"./filterDOMProps-CghfNOdR.js";import"./context-DElBd4UT.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-DFl6XB3S.js";import"./useFocusable-F8xU0DHg.js";import"./useFocusRing-CkzTFAtm.js";import"./react-children-utilities-fwO8tIg1.js";import"./Action-CY3HJwZy.js";import"./context-CCm7d4ti.js";import"./useStatic-PYikJUKS.js";import"./browser-1fV_VPE3.js";import"./getActionGroupSlot-B9XM3kr8.js";import"./dynamic-a4vM_yKz.js";import"./useLocalizedStringFormatter-CqStrOIa.js";import"./Heading-DMBcew2u.js";import"./Heading-av54CM7K.js";import"./RSPContexts-Bh8BGw74.js";import"./InlineCode-CscudAx6.js";import"./Link-CYuL7qHB.js";import"./usePress-DSXZ_FtS.js";import"./Separator-BhPKuqTB.js";import"./Separator-CZgxguF8.js";import"./CollectionBuilder-C6WQfqbB.js";import"./Text-JqEaJ00k.js";import"./EmulatedBoldText-Bq1I9eFa.js";import"./Text-C3C-Y4LW.js";import"./TextArea-DBgSxLHz.js";import"./TextFieldBase-DuLwPW_j.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-CPNVxfRH.js";import"./TextField-CuAhRXdh.js";import"./FieldError-CxS3H1fm.js";import"./context-BhDiC0Wn.js";import"./Form-5t9tGa91.js";import"./Group-H81idT9-.js";import"./Input-i8756tn3.js";import"./useTextField-EmATntPl.js";import"./useFormReset-DGsTBoXq.js";import"./useFormValidation-CYJuvObN.js";import"./ReactAriaControlledValueFix-CFNSYYni.js";import"./useManagedValue-CWGiHn9y.js";import"./LoadingSpinner-2grY-J-m.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-rqlppWuO.js";import"./ContextMenuSection-BnE57rKt.js";import"./Dialog-CKgg94zq.js";import"./Collection-BLnLf1sz.js";import"./SelectionManager-qFHbh8Rk.js";import"./useEvent-DnBkuKjZ.js";import"./useCollator-EaQty6uw.js";import"./FocusScope-pfm_0aY5.js";import"./VisuallyHidden-Nt_GLLf_.js";const mo={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(_,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=V.useRef(null),T=()=>{t.current&&t.current.focus()};return r.jsxs(H,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(A,{type:"button",onClick:T,children:"Set focus"})]})}};var u,h,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,x,M;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
