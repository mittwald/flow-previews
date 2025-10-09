import{j as r,r as V}from"./iframe-DwZ8STeX.js";import{M as e}from"./MarkdownEditor--4tHSr5E.js";import{L as l}from"./Label-wZ6tq0z6.js";import{F as _}from"./FieldError-DOIfsPUC.js";import{B as A}from"./Button-DviFkjeq.js";import{S as H}from"./Section-ClBJebLo.js";import"./index-Cun1SEai.js";import"./Markdown-Dkf7PQE2.js";import"./CodeBlock-BXSY8h8j.js";import"./clsx-B-dksMZM.js";import"./CopyButton-iAnEErfa.js";import"./IconWarning-dtP1FcGg.js";import"./flowComponent-B5_7XuIt.js";import"./index-ULfo01cY.js";import"./index-DRXVqLbm.js";import"./Tooltip-FOjQXaNm.js";import"./ClearPropsContextView-DSZLTZ0u.js";import"./utils-7Pnsuj4A.js";import"./OverlayArrow-BzoITITy.js";import"./useFocus-BONLbswZ.js";import"./ProgressBar-CsC-_1Kt.js";import"./Label-DpGi0C14.js";import"./Hidden-CV41pM0d.js";import"./filterDOMProps-CghfNOdR.js";import"./context-B00wSq60.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Blay967p.js";import"./useFocusable-p3-NtQMC.js";import"./useFocusRing-Bg4FiEXG.js";import"./react-children-utilities-pcwg-2Sd.js";import"./Action-bmScN_4O.js";import"./context-DCjwncLb.js";import"./useStatic-BQF2lsen.js";import"./browser-DDdNHtRK.js";import"./getActionGroupSlot-CSCOifJo.js";import"./dynamic-DhSxKtV5.js";import"./useLocalizedStringFormatter-B7gF29kp.js";import"./Heading-LQ8vefRa.js";import"./Heading-DjEClEsb.js";import"./RSPContexts-CnTUB1D3.js";import"./InlineCode-DkBiYtEu.js";import"./Link-I7BY8Ydt.js";import"./usePress-JMMpWwD2.js";import"./Separator-_ePah0dK.js";import"./Separator-D_cW8HVn.js";import"./CollectionBuilder-CkIB4w9D.js";import"./Text-O3JAN1OQ.js";import"./EmulatedBoldText-Cn2ModP-.js";import"./Text-BcrniBgV.js";import"./TextArea-BpQA5RLw.js";import"./TextFieldBase-BKC1AXzh.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-BrHb9YgI.js";import"./TextField-BkjiHt80.js";import"./FieldError-CX3z6nx3.js";import"./context-DapI3jdg.js";import"./Form-ekHeB2q6.js";import"./Group-DYrYUI7b.js";import"./Input-DPWebHIT.js";import"./useTextField-D3KPmHQF.js";import"./useFormReset-DQpyIayp.js";import"./useFormValidation-DWWt7inC.js";import"./ReactAriaControlledValueFix-Vb6shxA3.js";import"./useManagedValue-C1ymoO2y.js";import"./LoadingSpinner-C4ZuAlrP.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CkDO_RvR.js";import"./ContextMenuSection-ZF-vqHWD.js";import"./Dialog-2PCEZ6kq.js";import"./Collection-C8ZYuLoW.js";import"./SelectionManager-CYnwAR0E.js";import"./useEvent-wDKyQN9g.js";import"./useCollator-Cp0ZA5x6.js";import"./FocusScope-CIj22QkH.js";import"./VisuallyHidden-VLSV2bjz.js";const mo={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(_,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=V.useRef(null),T=()=>{t.current&&t.current.focus()};return r.jsxs(H,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(A,{type:"button",onClick:T,children:"Set focus"})]})}};var u,h,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,x,M;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
