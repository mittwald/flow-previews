import{j as r,r as V}from"./iframe-CqjcYzEy.js";import{M as e}from"./MarkdownEditor-2A6lNWrH.js";import{L as l}from"./Label-To7Hive9.js";import{F as _}from"./FieldError-BSbVK43F.js";import{B as A}from"./Button-_n3f2tJI.js";import{S as H}from"./Section-JW2VQrnX.js";import"./index-Cun1SEai.js";import"./Markdown-DvgTfnw_.js";import"./CodeBlock-VniFmiUC.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CLtu1NMo.js";import"./IconWarning-D54OF1fr.js";import"./flowComponent-DQ6MTfU-.js";import"./index-D26L2zGu.js";import"./index-0TrhkGFb.js";import"./Tooltip-GUPmT5ha.js";import"./ClearPropsContextView-BEsUC-dX.js";import"./utils-CEH4bJOc.js";import"./OverlayArrow-wycJn0we.js";import"./useFocus-BSqxszdS.js";import"./ProgressBar-CdOohM5f.js";import"./Label-D2Nd0YkC.js";import"./Hidden-D7Skj8Od.js";import"./filterDOMProps-CghfNOdR.js";import"./context-CVWMzqu0.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-D11yMwJT.js";import"./useFocusable-Cui5lI-x.js";import"./useFocusRing-Cq8bWJ4k.js";import"./react-children-utilities-BrlgP5jW.js";import"./Action-BV8ECr9I.js";import"./context-BZQvEHSq.js";import"./useStatic-B0fjiaVy.js";import"./browser-BlhuXvad.js";import"./getActionGroupSlot-DrC7gLzC.js";import"./dynamic-B6VmRDv6.js";import"./useLocalizedStringFormatter-CfOyXNn0.js";import"./Heading-Da22rpb0.js";import"./Heading-B1wP9ocY.js";import"./RSPContexts-CWbXVAY-.js";import"./InlineCode-BkYlJmSJ.js";import"./Link-BlKfuc72.js";import"./usePress-C-6OBS1L.js";import"./Separator-aofkm3XF.js";import"./Separator-CumANQwW.js";import"./CollectionBuilder-Ke-tvOIi.js";import"./Text-C88kvj5Y.js";import"./EmulatedBoldText-CpIdef6b.js";import"./Text-DBGfsT13.js";import"./TextArea-B1MJAyUT.js";import"./TextFieldBase-5hRWqTvc.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-DOrquxD2.js";import"./TextField-wTNEAGIG.js";import"./FieldError-CvNEPKy0.js";import"./context-os1nJ67Y.js";import"./Form-DnnLWbpp.js";import"./Group-gwwAZomc.js";import"./Input-D3RtfHLP.js";import"./useTextField-BgB0WV5Q.js";import"./useFormReset-BSVvJl_b.js";import"./useFormValidation-Jq_wsvSc.js";import"./ReactAriaControlledValueFix-ywrWc9Ds.js";import"./useManagedValue-DAPi_S1k.js";import"./LoadingSpinner-BJn8yItu.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BkLoBLwO.js";import"./ContextMenuSection-CogvxgrL.js";import"./Dialog-S-MpwxP2.js";import"./Collection-BS6hKJ97.js";import"./SelectionManager-7ttSlvgr.js";import"./useEvent-CkTqiin2.js";import"./useCollator-qMQcDonM.js";import"./FocusScope-BTKvvs_H.js";import"./VisuallyHidden-l-GsqitC.js";const mo={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(_,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=V.useRef(null),T=()=>{t.current&&t.current.focus()};return r.jsxs(H,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(A,{type:"button",onClick:T,children:"Set focus"})]})}};var u,h,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,x,M;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
