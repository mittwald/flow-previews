import{j as r,r as V}from"./iframe-B7R3Cp0m.js";import{M as e}from"./MarkdownEditor-BQE7cutG.js";import{L as l}from"./Label-BwiLuc4D.js";import{F as _}from"./FieldError-C50u32vO.js";import{B as A}from"./Button-BfLhmrhP.js";import{S as H}from"./Section-CXYImEJk.js";import"./index-Cun1SEai.js";import"./Markdown-DPRs8u7R.js";import"./CodeBlock-Ds0-KpsW.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BHnBJAlV.js";import"./IconWarning-CiDVbDUI.js";import"./flowComponent-W1sLmgeU.js";import"./index-DeoRyUxP.js";import"./index-DEEeTq16.js";import"./Tooltip-DYtQS4nk.js";import"./ClearPropsContextView-hmq_Snis.js";import"./utils-Cx-QUl4i.js";import"./OverlayArrow-BoyqVqhR.js";import"./useFocus-BfnX2cH5.js";import"./ProgressBar-BUsdfXWy.js";import"./Label-CciGw-jp.js";import"./Hidden-Cw4vRCn8.js";import"./filterDOMProps-CghfNOdR.js";import"./context-DZWDYeWp.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-DvHwfOTB.js";import"./useFocusable-gE9kDuNJ.js";import"./useFocusRing-KQNrYpLi.js";import"./react-children-utilities-CnM8BUU9.js";import"./Action-Duus-uy7.js";import"./context-s2Psh2SW.js";import"./useStatic-B9aD_BAc.js";import"./browser-D9qXvoab.js";import"./getActionGroupSlot-kiQExVjr.js";import"./dynamic-DQGoa_Us.js";import"./useLocalizedStringFormatter-BoxQ9ugt.js";import"./Heading-CSRs2ihp.js";import"./Heading-CiGgeB_H.js";import"./RSPContexts-nV9TqCtk.js";import"./InlineCode-Dk16_B_j.js";import"./Link-BM18EQ80.js";import"./usePress-CZzcdL0j.js";import"./Separator-BuMK1UNU.js";import"./Separator-BVTEwXXm.js";import"./CollectionBuilder-CIEMJSOs.js";import"./Text-mmmtihIj.js";import"./EmulatedBoldText-Bu0mLg2V.js";import"./Text-Cq8XMVEi.js";import"./TextArea-rAIXnCZM.js";import"./TextFieldBase-ZYQkOgQw.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-C2J1CzuI.js";import"./TextField-IgzM4m_7.js";import"./FieldError-DSYDYeL4.js";import"./context-DaR2uroz.js";import"./Form-zMs38ZCV.js";import"./Group-DymWerm5.js";import"./Input-B7hM4ezT.js";import"./useTextField-BGSqtVm6.js";import"./useFormReset-ltvOIr7i.js";import"./useFormValidation-Dv3hg-yA.js";import"./ReactAriaControlledValueFix-BhB912rA.js";import"./useManagedValue-l384NGmx.js";import"./LoadingSpinner-CBvMx9JI.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DTyr71oU.js";import"./ContextMenuSection-Qzqr7kFk.js";import"./Dialog-qQprQaf0.js";import"./Collection-DVhSH9ed.js";import"./SelectionManager-D3KJzfXx.js";import"./useEvent-2yiTmDJR.js";import"./useCollator-DXIp2FB0.js";import"./FocusScope-DeadHndu.js";import"./VisuallyHidden-7GIVT4u3.js";const mo={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(_,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=V.useRef(null),T=()=>{t.current&&t.current.focus()};return r.jsxs(H,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(A,{type:"button",onClick:T,children:"Set focus"})]})}};var u,h,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,x,M;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
