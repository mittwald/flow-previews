import{j as r,r as V}from"./iframe-4Q3VdU3W.js";import{M as e}from"./MarkdownEditor-B1dRNb3N.js";import{L as l}from"./Label-UJpqKaML.js";import{F as _}from"./FieldError-BQ2VN50e.js";import{B as A}from"./Button-DtfrCWpg.js";import{S as H}from"./Section-BCaeDUwn.js";import"./index-Cun1SEai.js";import"./Markdown-BCsvcz3v.js";import"./CodeBlock-0dOwP3Sj.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DWZF9vkF.js";import"./IconWarning-C7969b2c.js";import"./flowComponent-CWhymxNW.js";import"./index-D-slKUrQ.js";import"./index-PS7XpSls.js";import"./Tooltip-PxNxfp6f.js";import"./ClearPropsContextView-QV--h8ts.js";import"./utils-BDqSegOF.js";import"./OverlayArrow-C0bCojbN.js";import"./useFocus-B23mYmqe.js";import"./ProgressBar-DDVhQ4Au.js";import"./Label-BPYRgbkp.js";import"./Hidden-B-Sfeo6e.js";import"./filterDOMProps-CghfNOdR.js";import"./context-Ctn7vzaA.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-DDubLIo_.js";import"./useFocusable-xMViE0rI.js";import"./useFocusRing-JPznIV6A.js";import"./react-children-utilities-GmHPK41E.js";import"./Action-BPLFS_xS.js";import"./context-HST9WQNh.js";import"./useStatic-J4yhNwyX.js";import"./browser-BefUj7Q1.js";import"./getActionGroupSlot-DbevwPeS.js";import"./dynamic-D7Z9JYdX.js";import"./useLocalizedStringFormatter-BfINV5Nx.js";import"./Heading-EO3yxMsA.js";import"./Heading-Bob5JKW8.js";import"./RSPContexts-BraqArs8.js";import"./InlineCode-DodVruHE.js";import"./Link-Dz5bdeR6.js";import"./usePress-gN-0t-oA.js";import"./Separator-CY6SmelT.js";import"./Separator-V229l451.js";import"./CollectionBuilder-Djb2_WqG.js";import"./Text-Dj8BftP4.js";import"./EmulatedBoldText-VlnzXvNR.js";import"./Text-CbQs5VbJ.js";import"./TextArea-b_wR7KhY.js";import"./TextFieldBase-D2W4WVw6.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-DUJAoqDX.js";import"./TextField-pdOKyZ66.js";import"./FieldError-Bmwt53NP.js";import"./context-Crr8Yx7q.js";import"./Form-CQ3IrCNT.js";import"./Group-CjafXOCg.js";import"./Input-5I3vFHmb.js";import"./useTextField-BtsO4jRS.js";import"./useFormReset-DJaP_Vl0.js";import"./useFormValidation-QKBec53c.js";import"./ReactAriaControlledValueFix-zYXL9adS.js";import"./useManagedValue-Da6VjdlG.js";import"./LoadingSpinner-DB05D1_y.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CVw6sY0j.js";import"./ContextMenuSection-DHdrwNVp.js";import"./Dialog-eTJli1DK.js";import"./Collection-BcdTAldV.js";import"./SelectionManager-DSIHg9Rl.js";import"./useEvent-X_MmbY8S.js";import"./useCollator-DKF-AEK0.js";import"./FocusScope-CdBaHhXi.js";import"./VisuallyHidden-Bs3ruDlE.js";const mo={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(_,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=V.useRef(null),T=()=>{t.current&&t.current.focus()};return r.jsxs(H,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(A,{type:"button",onClick:T,children:"Set focus"})]})}};var u,h,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,x,M;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
