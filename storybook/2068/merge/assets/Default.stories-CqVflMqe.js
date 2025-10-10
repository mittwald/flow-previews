import{j as r,r as V}from"./iframe-BsWE3_7o.js";import{M as e}from"./MarkdownEditor-CnQDOmpi.js";import{L as l}from"./Label-D6AcunKl.js";import{F as _}from"./FieldError-Dyno9e6-.js";import{B as A}from"./Button-B8k4PzHL.js";import{S as H}from"./Section-BBfFuT6N.js";import"./index-Cun1SEai.js";import"./Markdown-C2EVqrNF.js";import"./CodeBlock-Dx_zs92r.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CdKBNsEE.js";import"./IconWarning-DP87PzzZ.js";import"./flowComponent-Cm7zYSgo.js";import"./index-Bx4whYyJ.js";import"./index-Dl-28hpS.js";import"./Tooltip-zKpBC20m.js";import"./ClearPropsContextView-BWN31-oJ.js";import"./utils-CDS5H-7_.js";import"./OverlayArrow-IIw_dauQ.js";import"./useFocus-D0VElTMN.js";import"./ProgressBar-B-b_Vg6x.js";import"./Label-CRuRdSc0.js";import"./Hidden-BJN4u45n.js";import"./filterDOMProps-CghfNOdR.js";import"./context-JgUU7ob0.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-ejVvWz-k.js";import"./useFocusable-CddXNiQZ.js";import"./useFocusRing-VBFwaSrL.js";import"./react-children-utilities-B4QWO26V.js";import"./Action-BuGRjvOM.js";import"./context-CUTz3ChQ.js";import"./useStatic-BvSdYqAU.js";import"./browser-LwAPTQ-2.js";import"./getActionGroupSlot-C6PA21cd.js";import"./dynamic-CuzBn_WV.js";import"./useLocalizedStringFormatter-Cam9elWn.js";import"./Heading-CjI7aUjt.js";import"./Heading-CzYkVZjM.js";import"./RSPContexts-BZ8FUmDB.js";import"./InlineCode-BszNcpGP.js";import"./Link-DUzgima2.js";import"./usePress-BAk4CpA9.js";import"./Separator-Cy_AwnGG.js";import"./Separator-Dpoi8-ef.js";import"./CollectionBuilder-B76ZLXz4.js";import"./Text-BX8imB2t.js";import"./EmulatedBoldText-BTQlJ2rY.js";import"./Text-TQ7kewRG.js";import"./TextArea-B8ARpJOw.js";import"./TextFieldBase-DmFBNK9C.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-BrfrkFA7.js";import"./TextField-BJDoddff.js";import"./FieldError-B9NI0uR6.js";import"./context-lpkCHAFg.js";import"./Form-C2iHaD1W.js";import"./Group-B4E33LQv.js";import"./Input-ChLUKEAu.js";import"./useTextField-JbRoKTtn.js";import"./useFormReset-DgPn8KEa.js";import"./useFormValidation-5Qvk76gI.js";import"./ReactAriaControlledValueFix-DrCMnd7H.js";import"./useManagedValue-BBn6RdVY.js";import"./LoadingSpinner-BHbUYlFD.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-Dk5kDV0G.js";import"./ContextMenuSection-B-erxgIm.js";import"./Dialog-BSaAMEbK.js";import"./Collection-DojlZZtj.js";import"./SelectionManager-01TNEB4e.js";import"./useEvent-iSMBndhq.js";import"./useCollator-Dfjx7kh0.js";import"./FocusScope-BU2EHzP0.js";import"./VisuallyHidden-CnzfSQ3j.js";const mo={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(_,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=V.useRef(null),T=()=>{t.current&&t.current.focus()};return r.jsxs(H,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(A,{type:"button",onClick:T,children:"Set focus"})]})}};var u,h,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,x,M;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
