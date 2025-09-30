import{j as r,r as V}from"./iframe-Dmf5T25c.js";import{M as e}from"./MarkdownEditor-BIpcNptg.js";import{L as l}from"./Label-CBoBMaMu.js";import{F as _}from"./FieldError-BrbRFqe2.js";import{B as A}from"./Button-DJAJQ6nX.js";import{S as H}from"./Section-CuethHEJ.js";import"./index-Cun1SEai.js";import"./Markdown-BanTGgiB.js";import"./CodeBlock-BJzbkjVJ.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BSeoYwao.js";import"./IconWarning-1UlzAmnA.js";import"./flowComponent-CPeLqOpb.js";import"./index-DqWAPupW.js";import"./index-C0-6kTd0.js";import"./Tooltip-BvA2rESJ.js";import"./ClearPropsContextView-5sw7kvOL.js";import"./utils-DsML-bt_.js";import"./OverlayArrow-FAQ6eOiA.js";import"./useFocus-DeIDhTP5.js";import"./ProgressBar-DfDGPnCO.js";import"./Label-D3KFpetT.js";import"./Hidden-ixkSnYSe.js";import"./filterDOMProps-CghfNOdR.js";import"./context-CfglF3Ge.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-ncLEgmHX.js";import"./useFocusable-Cm1AomQc.js";import"./useFocusRing-DUSzUYSL.js";import"./react-children-utilities-CzJxYjIH.js";import"./Action-7bo_XniG.js";import"./context-DfHcYJaf.js";import"./useStatic-B7bUROdd.js";import"./browser-DrFxiFmb.js";import"./getActionGroupSlot-CsRvNk5a.js";import"./dynamic-Do2mwXEo.js";import"./useLocalizedStringFormatter-BKpY3AP6.js";import"./Heading-CNHdE3DG.js";import"./Heading-C9XhdvxD.js";import"./RSPContexts-Bbwd3bcw.js";import"./InlineCode-b4mV08_5.js";import"./Link-DyuGByyd.js";import"./usePress-BaxinNTr.js";import"./Separator-ccG1DqID.js";import"./Separator-BJYdsHoh.js";import"./CollectionBuilder-gvxExH9K.js";import"./Text-DLrkajvz.js";import"./EmulatedBoldText-B4ifPFjU.js";import"./Text-DgEV6luH.js";import"./TextArea-GtbErJKf.js";import"./TextFieldBase-B3nf3yOl.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-BsTUsqd7.js";import"./TextField-B4mrJcnB.js";import"./FieldError-osDHr7AF.js";import"./context-BUTi_CwL.js";import"./Form-CioSAe3u.js";import"./Group-C7lBiOpp.js";import"./Input-CEe4Geo-.js";import"./useTextField-CxMmeXoO.js";import"./useFormReset-BQs2ByJh.js";import"./useFormValidation-BlVKI6aj.js";import"./ReactAriaControlledValueFix-B1bEAAAe.js";import"./useManagedValue-CRe6S7oq.js";import"./LoadingSpinner-CneC6UV3.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button--dPgG3q3.js";import"./ContextMenuSection-DC2rWjKA.js";import"./Dialog-BPlr3UWC.js";import"./Collection-D0Z3i_1t.js";import"./SelectionManager-2dfHW5bj.js";import"./useEvent-DYLx6Izz.js";import"./useCollator-BMcltKGA.js";import"./FocusScope-XGh4Ynry.js";import"./VisuallyHidden-CtSvbpyT.js";const mo={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(_,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=V.useRef(null),T=()=>{t.current&&t.current.focus()};return r.jsxs(H,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(A,{type:"button",onClick:T,children:"Set focus"})]})}};var u,h,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,x,M;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
