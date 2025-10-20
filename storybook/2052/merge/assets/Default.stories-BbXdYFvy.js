import{j as r,r as V}from"./iframe-BojHUq_o.js";import{M as e}from"./MarkdownEditor-CdrnesPr.js";import{L as l}from"./Label-DZ-kvQ_z.js";import{F as _}from"./useFieldComponent-DC978Re4.js";import{B as A}from"./Button-Dx72WFTb.js";import{S as H}from"./Section-DKmaai8j.js";import"./index-Cun1SEai.js";import"./Markdown-CCXX07XA.js";import"./CodeBlock-ZgLfGGlo.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DXe4Vpah.js";import"./IconWarning-CDe5PPLT.js";import"./flowComponent-T2-wi8uX.js";import"./index-BJZZiC-7.js";import"./index-Byu2kyB2.js";import"./Tooltip-IWtlSomy.js";import"./ClearPropsContextView-CWOgNtlO.js";import"./ClearPropsContext-CDRCLX7w.js";import"./utils-Gx6YrarE.js";import"./OverlayArrow-OKVkdbLV.js";import"./useFocus-C9Jl_mjq.js";import"./ProgressBar-Ba8rhXoO.js";import"./Label-kTT31z_U.js";import"./Hidden-ZJfagMAU.js";import"./filterDOMProps-CghfNOdR.js";import"./context-BrPX2Q0J.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-goB9hidZ.js";import"./useFocusable-BokWW085.js";import"./useFocusRing-PQu2duny.js";import"./react-children-utilities-M78AEMQD.js";import"./Action-BzhIxFNp.js";import"./context-awqjHi2S.js";import"./useStatic-CZJ_DwPf.js";import"./browser-DnzQTrak.js";import"./getActionGroupSlot-D49HjIN5.js";import"./dynamic-SDISKgE-.js";import"./useLocalizedStringFormatter-69wcReOi.js";import"./Heading-D97xV0XF.js";import"./Heading-CLxBTDIO.js";import"./RSPContexts-4pkCpc5X.js";import"./InlineCode-CCMwrDmQ.js";import"./Link-YRoJ2f8n.js";import"./usePress-B7zZe8uM.js";import"./Separator-DspL2uzr.js";import"./Separator-B6WcJaDG.js";import"./CollectionBuilder-D8Vcy0X7.js";import"./Text-HCLVlkvP.js";import"./EmulatedBoldText-B_edXnF6.js";import"./Text-BOOhOnJG.js";import"./TextArea-wZPq3ehr.js";import"./TextFieldBase-CsoMj4av.js";import"./FieldDescription-DQnyyCo1.js";import"./TextField-Bwv7dyz6.js";import"./Form-CWB6L6R3.js";import"./Group-D8Hf8MQ4.js";import"./Input-ldVtEAcy.js";import"./useTextField-RpbQmuLZ.js";import"./useFormReset-DOCiYQU_.js";import"./useFormValidation-Q_otrioy.js";import"./ReactAriaControlledValueFix-BGBOVb49.js";import"./useManagedValue-0HA7wLtu.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-C6E-2u5d.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DcusG6ul.js";import"./ContextMenuSection-CjxVZXwg.js";import"./Dialog-MdAsc9jB.js";import"./Collection-BfuTuT0s.js";import"./SelectionIndicator-IBXNysdl.js";import"./SelectionManager-DxBzATix.js";import"./useEvent-DG1kacar.js";import"./useCollator-Chx17-X6.js";import"./FocusScope-YAVoTg22.js";import"./VisuallyHidden-BBfPbX8D.js";const mo={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(_,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=V.useRef(null),T=()=>{t.current&&t.current.focus()};return r.jsxs(H,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(A,{type:"button",onClick:T,children:"Set focus"})]})}};var u,h,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,x,M;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
