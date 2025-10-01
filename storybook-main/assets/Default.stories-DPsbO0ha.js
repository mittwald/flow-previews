import{j as r,r as V}from"./iframe-FESji9AM.js";import{M as e}from"./MarkdownEditor-Crj_mbdk.js";import{L as l}from"./Label-pNVGz1sw.js";import{F as _}from"./FieldError-zF1s5-sf.js";import{B as A}from"./Button-BAxmgeRc.js";import{S as H}from"./Section-BpWwEjxG.js";import"./index-Cun1SEai.js";import"./Markdown-J8ygga57.js";import"./CodeBlock-BhmKmbUX.js";import"./clsx-B-dksMZM.js";import"./CopyButton-D2iQKyuD.js";import"./IconWarning-BN848dMt.js";import"./flowComponent-DFQAJ_2B.js";import"./index-BqyXU5kt.js";import"./index-ChCUOHR4.js";import"./Tooltip-D2feOvAQ.js";import"./ClearPropsContextView-NtUgrnKO.js";import"./utils-C8mGBIgx.js";import"./OverlayArrow-8xtTBq8b.js";import"./useFocus-Bhqj5rOY.js";import"./ProgressBar-BtYyhcda.js";import"./Label-DTEJhL1C.js";import"./Hidden-EsiqW7jM.js";import"./filterDOMProps-CghfNOdR.js";import"./context-ChjkYhaK.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-GWuXrIJ_.js";import"./useFocusable-C4O-U4lE.js";import"./useFocusRing-zSoWzuoi.js";import"./react-children-utilities-C1rV0jWg.js";import"./Action-CrJdyVja.js";import"./context-igvBEEcT.js";import"./useStatic-JqJXV1dT.js";import"./browser-CzqLgnVu.js";import"./getActionGroupSlot-yK4DsrgL.js";import"./dynamic-CUTbtcza.js";import"./useLocalizedStringFormatter-CqB2I62z.js";import"./Heading-BU3RGcV8.js";import"./Heading-aIRtuq7k.js";import"./RSPContexts-DiZSnWK-.js";import"./InlineCode-BQfhI8x5.js";import"./Link-iiRu8NM4.js";import"./usePress-CLpB9Wju.js";import"./Separator-DiJVhEpY.js";import"./Separator-C3QdnVt7.js";import"./CollectionBuilder-CIsMqzLE.js";import"./Text-BCUZ6o5_.js";import"./EmulatedBoldText-DW2sem56.js";import"./Text-CpJktiaj.js";import"./TextArea-DdPWGtsN.js";import"./TextFieldBase-DLKZyP-3.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-CA-9B81B.js";import"./TextField-BP1yQCB6.js";import"./FieldError-DlYIOKPN.js";import"./context-BElELkmV.js";import"./Form-BtmTLzrx.js";import"./Group-CLv-XZL2.js";import"./Input-BlcEEaiS.js";import"./useTextField-DfDR-6Y5.js";import"./useFormReset-B3Fww5Tk.js";import"./useFormValidation-B9n8pxvz.js";import"./ReactAriaControlledValueFix-S5j312LI.js";import"./useManagedValue-DIWxKMPy.js";import"./LoadingSpinner-BczKcQ8x.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BW1fAfFv.js";import"./ContextMenuSection-B7y0wjj1.js";import"./Dialog-CXSXfPFc.js";import"./Collection-5dsgZq8H.js";import"./SelectionManager-CZcnEcDm.js";import"./useEvent-CA4CrZH2.js";import"./useCollator-B71GfqqY.js";import"./FocusScope-DVksIqcF.js";import"./VisuallyHidden-CxIvQbp6.js";const mo={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(_,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=V.useRef(null),T=()=>{t.current&&t.current.focus()};return r.jsxs(H,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(A,{type:"button",onClick:T,children:"Set focus"})]})}};var u,h,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,x,M;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
