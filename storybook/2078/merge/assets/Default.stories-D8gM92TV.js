import{j as r,r as V}from"./iframe-DE21mSiE.js";import{M as e}from"./MarkdownEditor-jM03-Ytw.js";import{L as l}from"./Label-D6jpl-Ee.js";import{F as _}from"./FieldError-B59qoisB.js";import{B as A}from"./Button-DdcjdJkJ.js";import{S as H}from"./Section-CoWAiCo1.js";import"./index-Cun1SEai.js";import"./Markdown-BfOUUKaA.js";import"./CodeBlock-DfasCd7g.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DQf3Uasf.js";import"./IconWarning-iWnf9NI2.js";import"./flowComponent-CyATdwQg.js";import"./index-DVBAlOxg.js";import"./index-ssZEpx-s.js";import"./Tooltip-K2TVHaJS.js";import"./ClearPropsContextView-DDfoOlOf.js";import"./utils-DqYJbNsI.js";import"./OverlayArrow-D4IsQ9Uw.js";import"./useFocus-CRZNnr1R.js";import"./ProgressBar-ByrF5SpY.js";import"./Label-C-oTvvPr.js";import"./Hidden-C98sYe40.js";import"./filterDOMProps-CghfNOdR.js";import"./context-Br9w7yZh.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Bml9wY_-.js";import"./useFocusable-AVRnrAkJ.js";import"./useFocusRing-pH6mNL0D.js";import"./react-children-utilities-Cpp0uuIQ.js";import"./Action-CR9ahmpz.js";import"./context-6jqGW8Yr.js";import"./useStatic-Cbl6RHQu.js";import"./browser-BjU0tWvf.js";import"./getActionGroupSlot-CKs13wvK.js";import"./dynamic-BIsQA2QQ.js";import"./useLocalizedStringFormatter-Bn_AwxOr.js";import"./Heading-Ztm_X6Xu.js";import"./Heading-b-A4WO83.js";import"./RSPContexts-BtJsn2IM.js";import"./InlineCode-DMAoFhJU.js";import"./Link-BcBqYxaR.js";import"./usePress-Dv9orCJu.js";import"./Separator-CryR9zYS.js";import"./Separator-BLbs5DM2.js";import"./CollectionBuilder-OPUz1gD2.js";import"./Text-DOdVur7X.js";import"./EmulatedBoldText-BOQZ24Hi.js";import"./Text-CutbQTmF.js";import"./TextArea-Bh6VhgOe.js";import"./TextFieldBase-D7xRTsF_.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-DfXOpk0t.js";import"./TextField-DQGanVao.js";import"./FieldError-Bu_r-4G9.js";import"./Form-C4-mbjGM.js";import"./Group-Xk6UpG4z.js";import"./Input-C920aKTw.js";import"./useTextField-BNBoF8qF.js";import"./useFormReset-BcRO7Ruj.js";import"./useFormValidation-B0vSubJ3.js";import"./ReactAriaControlledValueFix-CGiqkN0v.js";import"./useManagedValue-DoHR4Jg1.js";import"./LoadingSpinner-CObpOXYq.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CbR0WrFZ.js";import"./ContextMenuSection-CuNeUF_7.js";import"./Dialog-CqjG3TV5.js";import"./Collection-CtBmofMr.js";import"./SelectionIndicator-Daa_H3OJ.js";import"./SelectionManager-RcCyJikL.js";import"./useEvent-9zXlgdze.js";import"./useCollator-BKBsR6-a.js";import"./FocusScope-1KdfzaZh.js";import"./VisuallyHidden-pa5WzvsI.js";const mo={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(_,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=V.useRef(null),T=()=>{t.current&&t.current.focus()};return r.jsxs(H,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(A,{type:"button",onClick:T,children:"Set focus"})]})}};var u,h,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,x,M;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
