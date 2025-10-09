import{j as r,r as V}from"./iframe-CP5fTbjA.js";import{M as e}from"./MarkdownEditor-Byv4u8B3.js";import{L as l}from"./Label-BqN0rMYY.js";import{F as _}from"./FieldError-De2xyHB9.js";import{B as A}from"./Button-LzGPdYwx.js";import{S as H}from"./Section-DiXKzprR.js";import"./index-Cun1SEai.js";import"./Markdown-DecZrJWQ.js";import"./CodeBlock-Cf3DoFz2.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DEfi2EYR.js";import"./IconWarning-YasB_Ei3.js";import"./flowComponent-CTnt5eSB.js";import"./index-hIOjYjaD.js";import"./index-DskZqzrG.js";import"./Tooltip-CBjFthEn.js";import"./ClearPropsContextView-DhKx-WaR.js";import"./utils-D6GTtcOE.js";import"./OverlayArrow-CtZDvQgB.js";import"./useFocus-wlnmJgKA.js";import"./ProgressBar-DPdjuR9Z.js";import"./Label-CxfqiuLL.js";import"./Hidden-CR2rUGYE.js";import"./filterDOMProps-CghfNOdR.js";import"./context-pkC0B_Pd.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-5yv2Ipvc.js";import"./useFocusable-BoWde-QA.js";import"./useFocusRing-Cgj30sRP.js";import"./react-children-utilities-C9GRWpEO.js";import"./Action-BkjzGa_I.js";import"./context-DXGAVSML.js";import"./useStatic-CBwN_HzY.js";import"./browser-BxAQ3I6S.js";import"./getActionGroupSlot-DggKykPy.js";import"./dynamic-e5X8hiwW.js";import"./useLocalizedStringFormatter-DGz7N0CE.js";import"./Heading-BRj9pACc.js";import"./Heading-6kSboyTb.js";import"./RSPContexts-BW6Q5n3-.js";import"./InlineCode-CVfNmEoy.js";import"./Link-DvfzK0RM.js";import"./usePress-BOoZUp13.js";import"./Separator-DoTsMiB7.js";import"./Separator-CXM6la1d.js";import"./CollectionBuilder-HzejECpA.js";import"./Text-CHvdz95V.js";import"./EmulatedBoldText-CnmkyqOO.js";import"./Text-BAGiBnj-.js";import"./TextArea-C9ZO6mKS.js";import"./TextFieldBase-B_onkFZ8.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-CEO5JJNc.js";import"./TextField-3H0FQYY0.js";import"./FieldError-CsW0lZ5n.js";import"./context-BoN7p6BF.js";import"./Form-DU1fRx45.js";import"./Group-kabkfPCX.js";import"./Input-DKZrAi90.js";import"./useTextField-Brwt3o7O.js";import"./useFormReset-B6af-x2Y.js";import"./useFormValidation-Lrzd87zJ.js";import"./ReactAriaControlledValueFix-CVNkgbtZ.js";import"./useManagedValue-DNffB7Sb.js";import"./LoadingSpinner-B6JgwtAG.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DcNEz-W6.js";import"./ContextMenuSection-V-zZv8b3.js";import"./Dialog-DAzhbt-W.js";import"./Collection-BOIgwszt.js";import"./SelectionManager-zDFJDssk.js";import"./useEvent-B3kJFynN.js";import"./useCollator-NOEQaEQX.js";import"./FocusScope-OWR7C_89.js";import"./VisuallyHidden-umqttFyt.js";const mo={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(_,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=V.useRef(null),T=()=>{t.current&&t.current.focus()};return r.jsxs(H,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(A,{type:"button",onClick:T,children:"Set focus"})]})}};var u,h,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,x,M;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
