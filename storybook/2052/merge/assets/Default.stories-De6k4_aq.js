import{j as r,r as V}from"./iframe-DTheBFqg.js";import{M as e}from"./MarkdownEditor-Dty8R6if.js";import{L as l}from"./Label-DS5MocSE.js";import{F as _}from"./useFieldComponent-mBN-j8SF.js";import{B as A}from"./Button-Bmq0qjWo.js";import{S as H}from"./Section-BDBFYB_1.js";import"./index-Cun1SEai.js";import"./Markdown-CrEBTnjU.js";import"./CodeBlock-tbLOFajp.js";import"./clsx-B-dksMZM.js";import"./CopyButton-Dae4xMkc.js";import"./IconWarning-CXTS1Zmo.js";import"./flowComponent-gCUS5Qd-.js";import"./index-ulNAr9WE.js";import"./index-C24gQbls.js";import"./Tooltip-snVM8qXH.js";import"./ClearPropsContextView-CxFwQ4wb.js";import"./ClearPropsContext-NW1-nYLP.js";import"./utils-CIVb4-pA.js";import"./OverlayArrow-Bio3H0xn.js";import"./useFocus-gFMm1SVx.js";import"./ProgressBar-Dr6zks-A.js";import"./Label-DaxiHPCi.js";import"./Hidden-BUnkE8VR.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DE7AINdt.js";import"./context-BBJsvWP1.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CxM5G25q.js";import"./useFocusable-CIkWBa0n.js";import"./useFocusRing-Bw6jYcrF.js";import"./react-children-utilities-g2QZgYrG.js";import"./Action-XVrtYdEu.js";import"./context-D5Eh6Kjh.js";import"./useStatic-KScOH6sT.js";import"./browser-BqPz5wcV.js";import"./getActionGroupSlot-BTW6ZZ6S.js";import"./dynamic-DYsVCHyX.js";import"./useLocalizedStringFormatter-CvDaoHpN.js";import"./Heading-B00i_-bg.js";import"./Heading-CTEcNSu5.js";import"./RSPContexts-DdYP_yiK.js";import"./InlineCode-94UWisyH.js";import"./Link-KWZ2RBVk.js";import"./usePress-DWQVem_V.js";import"./Separator-CoxPpRvG.js";import"./Separator-D87Ko5QM.js";import"./CollectionBuilder-CQSVhr8L.js";import"./Text-DVaBUvZL.js";import"./EmulatedBoldText-P0d28SeQ.js";import"./Text-C48huDBb.js";import"./TextArea-SHeHEeoq.js";import"./TextFieldBase-DL6tAx3q.js";import"./FieldDescription-Coryxrlu.js";import"./TextField-7NnkUF-m.js";import"./Form-B9EEIYmx.js";import"./Group-C3T90Noz.js";import"./Input-Ct0KMtbU.js";import"./useTextField-Cl-78bMJ.js";import"./useFormReset-C6eFdCIy.js";import"./useFormValidation-Bp-At_qz.js";import"./ReactAriaControlledValueFix-DoO2Kj3m.js";import"./useManagedValue-B69FvDQi.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CLX8R9JK.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-B9sfb4m-.js";import"./ContextMenuSection-DVfZqLHJ.js";import"./Dialog-DwHrBIEx.js";import"./Collection-BJPKgIab.js";import"./SelectionIndicator-CjHN0yDY.js";import"./SelectionManager-uhDgeTSM.js";import"./useEvent-BjpDtAMc.js";import"./useCollator-2o_2J_me.js";import"./FocusScope-CHz78Q3h.js";import"./VisuallyHidden-D3PBi60E.js";const co={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(_,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=V.useRef(null),T=()=>{t.current&&t.current.focus()};return r.jsxs(H,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(A,{type:"button",onClick:T,children:"Set focus"})]})}};var u,h,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,x,M;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(y=(O=d.parameters)==null?void 0:O.docs)==null?void 0:y.source}}};const lo=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","Resizeable","WithOnChange","WithRef"];export{s as Default,a as Disabled,m as Resizeable,n as ShowCharacterCount,p as WithFieldError,i as WithLabel,c as WithOnChange,d as WithRef,lo as __namedExportsOrder,co as default};
