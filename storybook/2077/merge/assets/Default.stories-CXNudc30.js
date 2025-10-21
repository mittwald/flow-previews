import{j as r,r as V}from"./iframe-CTxtjXon.js";import{M as e}from"./MarkdownEditor-gCnTlX2Z.js";import{L as l}from"./Label-DtGgIyZp.js";import{F as _}from"./FieldError-yMhB6vk6.js";import{B as A}from"./Button-CTR-HA58.js";import{S as H}from"./Section-BY4zi19G.js";import"./index-Cun1SEai.js";import"./Markdown-XiUpllaQ.js";import"./CodeBlock-YMXubEYz.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DAwK6l0E.js";import"./IconWarning-BCagwmXL.js";import"./flowComponent-Cceoz8ap.js";import"./index-BzGnAInb.js";import"./index-BCkzqzEU.js";import"./Tooltip-Bwqh9sz3.js";import"./ClearPropsContextView-0ZtOxsLm.js";import"./utils-Dyxd3-sq.js";import"./OverlayArrow-DQGSQRaj.js";import"./useFocus-DHjekZqL.js";import"./ProgressBar-CwnBBaoA.js";import"./Label-JOCFYh16.js";import"./Hidden-B6GGwvwy.js";import"./filterDOMProps-CghfNOdR.js";import"./context-OuuPOLWB.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CwLLr83F.js";import"./useFocusable-C9nsuFPZ.js";import"./useFocusRing-w77Sy5gu.js";import"./react-children-utilities-zeoR6A0c.js";import"./Action-DoHauz19.js";import"./context-C6LdJJW6.js";import"./useStatic-FLOcJlac.js";import"./browser-B97evyF-.js";import"./getActionGroupSlot-CRH0bVBh.js";import"./dynamic-BqhEVzNx.js";import"./useLocalizedStringFormatter-B51ecTCL.js";import"./Heading-DhacWgsT.js";import"./Heading-CDy8srZ9.js";import"./RSPContexts-C8qhDI2w.js";import"./InlineCode-C36tYAkO.js";import"./Link-P7Z3jhiY.js";import"./usePress-7iMHywUA.js";import"./Separator-CFnQk13i.js";import"./Separator-7MWrsQei.js";import"./CollectionBuilder-1DpsfIN0.js";import"./Text-DQcec0AG.js";import"./EmulatedBoldText-Da4iAST0.js";import"./Text-DVSB2R1T.js";import"./TextArea-BzIfE8jr.js";import"./TextFieldBase-Wk6xnV6T.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-YWOUxJnG.js";import"./TextField-DgTH4A2F.js";import"./FieldError-DPTagllN.js";import"./Form-aYocGFK9.js";import"./Group-BURTQMUm.js";import"./Input-B1qknwCX.js";import"./useTextField-Y19scEG9.js";import"./useFormReset-dEYYJoAx.js";import"./useFormValidation-PRBMAw7o.js";import"./ReactAriaControlledValueFix-BxTFRqLo.js";import"./useManagedValue-C9N5Z3-r.js";import"./LoadingSpinner-ju42Rriq.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BdISzqDC.js";import"./ContextMenuSection-BZN_5wKO.js";import"./Dialog-D2IuAywV.js";import"./Collection-Bj68a-ij.js";import"./SelectionIndicator-DjYZoC83.js";import"./SelectionManager-CnAC5LUd.js";import"./useEvent-VfxjGHfX.js";import"./useCollator-W6_B_X8C.js";import"./FocusScope-BV_8rP7c.js";import"./VisuallyHidden-CZsUJsM2.js";const mo={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(_,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=V.useRef(null),T=()=>{t.current&&t.current.focus()};return r.jsxs(H,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(A,{type:"button",onClick:T,children:"Set focus"})]})}};var u,h,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,x,M;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
