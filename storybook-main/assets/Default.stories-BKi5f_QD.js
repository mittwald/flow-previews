import{j as r,r as V}from"./iframe-D2Anwmct.js";import{M as e}from"./MarkdownEditor-C7a4f1OR.js";import{L as l}from"./Label-CqHNa78s.js";import{F as _}from"./FieldError-BoPnTUuW.js";import{B as A}from"./Button-DzBCXdJ8.js";import{S as H}from"./Section-D-XgJ8U5.js";import"./index-Cun1SEai.js";import"./Markdown-hYF-uSCb.js";import"./CodeBlock-CdK4Zom2.js";import"./clsx-B-dksMZM.js";import"./CopyButton-Dodj9TX3.js";import"./IconWarning-DnpABaws.js";import"./flowComponent-DKluqIHM.js";import"./index-f9td_37l.js";import"./index-Ch7RQrKi.js";import"./Tooltip-Cdqow3pZ.js";import"./ClearPropsContextView-DS9FXrAR.js";import"./utils-BpjcCBEz.js";import"./OverlayArrow-nozbf4eZ.js";import"./useFocus-CPbnM8zc.js";import"./ProgressBar-B5M0YtFC.js";import"./Label-CyDLPDuC.js";import"./Hidden-C6VQoCGL.js";import"./filterDOMProps-CghfNOdR.js";import"./context--yho_VB2.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CmSk5MJT.js";import"./useFocusable-BPmxfIwz.js";import"./useFocusRing-BsT1m1qa.js";import"./react-children-utilities-Ba6QU1Np.js";import"./Action-TQJO2mvI.js";import"./context-BRmDUAMd.js";import"./useStatic-CHoU06Vl.js";import"./browser-CPuaporN.js";import"./getActionGroupSlot-CMiTVAum.js";import"./dynamic-Cfahilqg.js";import"./useLocalizedStringFormatter-BekYTjw8.js";import"./Heading-CHI9LGKg.js";import"./Heading-cAelsVpC.js";import"./RSPContexts-W5re5w0Z.js";import"./InlineCode-hzsjhtVc.js";import"./Link-B6JgnFIM.js";import"./usePress-DkH4CmpU.js";import"./Separator-lFcqo_wJ.js";import"./Separator-XkOJaGaU.js";import"./CollectionBuilder-BN9-opMn.js";import"./Text-DtdPLjLU.js";import"./EmulatedBoldText-C4J0xt-K.js";import"./Text-lRP8kqf1.js";import"./TextArea-CT3HmVfY.js";import"./TextFieldBase-DHe8x4J1.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-Dxspg-xZ.js";import"./TextField-cut1w53I.js";import"./FieldError-BxxGUPOn.js";import"./context-X2EiAF6-.js";import"./Form-C_7tgvec.js";import"./Group-CY7TZenZ.js";import"./Input-B4tXXK1a.js";import"./useTextField-xwyx7IZc.js";import"./useFormReset-Bn-oECSu.js";import"./useFormValidation-s-r8BMkB.js";import"./ReactAriaControlledValueFix-BbJVUddt.js";import"./useManagedValue-cFkR_K2Y.js";import"./LoadingSpinner-Dn83SSS7.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DXQ0LQy1.js";import"./ContextMenuSection-DEYSZK6N.js";import"./Dialog-CzAn2oqc.js";import"./Collection-C6c4IzCm.js";import"./SelectionManager-BVJUtLYE.js";import"./useEvent-eZ8bSyVx.js";import"./useCollator-DzTf225U.js";import"./FocusScope-B3f0Mp00.js";import"./VisuallyHidden-Cz7LPiXA.js";const mo={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(_,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=V.useRef(null),T=()=>{t.current&&t.current.focus()};return r.jsxs(H,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(A,{type:"button",onClick:T,children:"Set focus"})]})}};var u,h,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,x,M;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
