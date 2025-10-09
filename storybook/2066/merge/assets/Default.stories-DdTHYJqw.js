import{j as r,r as V}from"./iframe-C72LIGrp.js";import{M as e}from"./MarkdownEditor-Cx1Ekdhc.js";import{L as l}from"./Label-BuGN1EiA.js";import{F as _}from"./FieldError-D1AwEDR1.js";import{B as A}from"./Button-Dmf_fI6U.js";import{S as H}from"./Section-CMWdy8sM.js";import"./index-Cun1SEai.js";import"./Markdown-CcIAPE0L.js";import"./CodeBlock-DTv_1SF-.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BssJ-2mp.js";import"./IconWarning-DoRUMKye.js";import"./flowComponent-iVWHpCHC.js";import"./index-D0tOGuOJ.js";import"./index-D1phmMZw.js";import"./Tooltip-bSv50KwR.js";import"./ClearPropsContextView-DQBdf73E.js";import"./utils-Day1TTYQ.js";import"./OverlayArrow-CdAhbmJ_.js";import"./useFocus-B4vRNHSZ.js";import"./ProgressBar-BXSV1RNz.js";import"./Label-CF9BgwC5.js";import"./Hidden-qTQe9qE3.js";import"./filterDOMProps-CghfNOdR.js";import"./context-BWimVEWy.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-BbMqle0_.js";import"./useFocusable-Dej5ci1L.js";import"./useFocusRing-DuRh0iim.js";import"./react-children-utilities-CxgkEPSS.js";import"./Action-BbbbpS8d.js";import"./context-BXphONxA.js";import"./useStatic-DPVFgY8A.js";import"./browser-Bf0-GHuQ.js";import"./getActionGroupSlot-CHOOOagJ.js";import"./dynamic-M8RwUexW.js";import"./useLocalizedStringFormatter-BdEN-g86.js";import"./Heading-CQTj2TvE.js";import"./Heading-BNkuiER5.js";import"./RSPContexts-CxFI_fU2.js";import"./InlineCode-CXqo-M1m.js";import"./Link-XTU_bSRD.js";import"./usePress-CqQxVakl.js";import"./Separator-Dctqmwc8.js";import"./Separator-B7O3kRSm.js";import"./CollectionBuilder-CIcvBtxV.js";import"./Text-CvlnZLd7.js";import"./EmulatedBoldText-CkSYZpi_.js";import"./Text-_4m1t08i.js";import"./TextArea-CHTn7d_7.js";import"./TextFieldBase-C6C3GzH_.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-Ch1dZGOn.js";import"./TextField-CzyfmXJa.js";import"./FieldError-DSjxrI1_.js";import"./context-yrxx87JI.js";import"./Form-BHgRaZ3j.js";import"./Group-BK-2drbg.js";import"./Input-Dda4VuA-.js";import"./useTextField-BTvozyhw.js";import"./useFormReset-Bg8mSl5k.js";import"./useFormValidation-wW6D6XQK.js";import"./ReactAriaControlledValueFix-B91Z4yvN.js";import"./useManagedValue-CL5QVDIV.js";import"./LoadingSpinner-_EHg-BbH.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BS54933W.js";import"./ContextMenuSection-DZErrfjN.js";import"./Dialog-DSx4rsSv.js";import"./Collection-CdRuOc0_.js";import"./SelectionManager-BcjpThhu.js";import"./useEvent-C77oyAsY.js";import"./useCollator-BOhm7rcx.js";import"./FocusScope-CCmAn32n.js";import"./VisuallyHidden-BStPS_vY.js";const mo={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(_,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=V.useRef(null),T=()=>{t.current&&t.current.focus()};return r.jsxs(H,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(A,{type:"button",onClick:T,children:"Set focus"})]})}};var u,h,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,x,M;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
