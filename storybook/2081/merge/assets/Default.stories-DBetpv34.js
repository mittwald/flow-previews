import{j as r,r as V}from"./iframe-Cxe2R7_6.js";import{M as e}from"./MarkdownEditor-CWsH8mDf.js";import{L as l}from"./Label-BvEZKMSr.js";import{F as _}from"./FieldError-DJ7xx1bf.js";import{B as A}from"./Button-DDreAfBq.js";import{S as H}from"./Section-CTCBpNMs.js";import"./index-Cun1SEai.js";import"./Markdown-BnUqZ-T3.js";import"./CodeBlock-J5jWsxjY.js";import"./clsx-B-dksMZM.js";import"./CopyButton-hGmakpme.js";import"./IconWarning-Jidhe8u4.js";import"./flowComponent-atuhteL1.js";import"./index-BmulK9zF.js";import"./index-C9WdiMZF.js";import"./Tooltip-DmRAucdK.js";import"./ClearPropsContextView-qCrklifR.js";import"./utils-DyWdIPZh.js";import"./OverlayArrow-BxgQp36F.js";import"./useFocus-Cpp7XZsJ.js";import"./ProgressBar-CNBuCKLn.js";import"./Label-bC6dqEsb.js";import"./Hidden-D2ApJihV.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-D72_X68t.js";import"./context-C4neI5Xk.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-B5CLhXq4.js";import"./useFocusable-D66X7lwl.js";import"./useFocusRing-b-PxAWXn.js";import"./react-children-utilities-C1t4wNN3.js";import"./Action-g8e46b99.js";import"./context-DVixImBB.js";import"./useStatic-CcLu1Qpn.js";import"./browser-eQsbTmR1.js";import"./getActionGroupSlot-BsGN6_f1.js";import"./dynamic-C5ZbgSqQ.js";import"./useLocalizedStringFormatter-Iif1rEXq.js";import"./Heading-BGX___zH.js";import"./Heading-Cg-1JubH.js";import"./RSPContexts-BTHaIq-S.js";import"./InlineCode-C6eTYQi4.js";import"./Link-B5-ksQ_w.js";import"./usePress-CePQ8dAH.js";import"./Separator-BlnQgmPN.js";import"./Separator-TUkk8FpW.js";import"./CollectionBuilder-DY4KGZ6m.js";import"./Text-BRz7lILS.js";import"./EmulatedBoldText-C6_bi1Ug.js";import"./Text-DwJdwITw.js";import"./TextArea-CVeSv2Yq.js";import"./TextFieldBase-B-FVaFIt.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-BjaDofba.js";import"./TextField-BrnMCB9A.js";import"./FieldError-C0Ib8VCD.js";import"./Form-xSvri39Q.js";import"./Group-CoOuBhM6.js";import"./Input-D9HmJNQ0.js";import"./useTextField-B345Mwln.js";import"./useFormReset-ClXq3Rv0.js";import"./useFormValidation-Bu_33Brb.js";import"./ReactAriaControlledValueFix-D6nfZf0A.js";import"./useManagedValue-C6eWYvnC.js";import"./LoadingSpinner-e3lyxMd6.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CDVXHq5z.js";import"./ContextMenuSection-Bi1QxvNY.js";import"./Dialog-Ch6Gf7aG.js";import"./Collection-C-iX88s0.js";import"./SelectionIndicator-BZBAluCS.js";import"./SelectionManager-D-Y_L5dA.js";import"./useEvent-C1DB-zaK.js";import"./useCollator-B3EheL1U.js";import"./FocusScope-NPqoHgmt.js";import"./VisuallyHidden-BVfZKHZh.js";const co={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(_,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=V.useRef(null),T=()=>{t.current&&t.current.focus()};return r.jsxs(H,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(A,{type:"button",onClick:T,children:"Set focus"})]})}};var u,h,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,x,M;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
