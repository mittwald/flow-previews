import{j as r,r as f}from"./iframe-B-dt22EB.js";import{M as o}from"./MarkdownEditor-BO17ScSI.js";import{L as R}from"./Label-DPQ9pprY.js";import{F as b}from"./FieldError-B26pZzZe.js";import{B as z}from"./Button-Cfktl1nd.js";import{S as x}from"./Section-DON1SGHH.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-BoJz6iTq.js";import"./CodeBlock-Dru3drk2.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CEV04uKi.js";import"./IconWarning-BbozUbXF.js";import"./flowComponent-etctvabC.js";import"./index-DAMyqNwe.js";import"./index-D5JlC3xK.js";import"./remote-D6Q14pEz.js";import"./Tooltip-CecfhBpp.js";import"./utils-DoxtMd58.js";import"./OverlayArrow-Drn8uqTb.js";import"./useFocus-9GLlZYuH.js";import"./ProgressBar-Cko_rEpF.js";import"./Label-FcJtXcx4.js";import"./Hidden-bM58ni_l.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BKpYilGg.js";import"./context--H9enp2q.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-6FfHDt87.js";import"./useControlledState-jk51FjyI.js";import"./useFocusable-C0Z9ZNeY.js";import"./react-children-utilities-CTFJsJ-X.js";import"./ActionBatch-DMUImU48.js";import"./useOverlayController-CgZod_MY.js";import"./useStatic-CMEoTlaq.js";import"./browser-CJi_ki0i.js";import"./getActionGroupSlot-DUUveJ77.js";import"./dynamic-Ci7OcZKZ.js";import"./useLocalizedStringFormatter-CCZK-pLP.js";import"./Heading-8-mNxmV-.js";import"./Heading-jN8dhiFm.js";import"./RSPContexts-pIsu_52Z.js";import"./InlineCode-B0FnZQIQ.js";import"./Link-BI5jJCyV.js";import"./usePress-CgYKrzfD.js";import"./Separator-CN6htpTc.js";import"./Separator-CiuJS_mH.js";import"./CollectionBuilder-D1rtQOhv.js";import"./Text-BCqKdXYs.js";import"./EmulatedBoldText-fVR6kGZs.js";import"./Text-vBmBwiIT.js";import"./TextArea-NSQiub61.js";import"./useFieldComponent-D2j3Q6-m.js";import"./useControlledHostValueProps-AfSNk-Xd.js";import"./FieldDescription-DkcWcefH.js";import"./TextField-D0alrL8F.js";import"./FieldError-BkuObk6W.js";import"./Form-DTBJD-53.js";import"./Group-Cgb--nht.js";import"./Input-1avyZMmc.js";import"./useTextField-Dar2ncjY.js";import"./useFormReset-BwldCtpD.js";import"./useFormValidation-Ds3P2hMN.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DjlqIQ0W.js";import"./AlertIcon-B1kQf0Ru.js";import"./LoadingSpinner-ISzATTs8.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CjYcjBnT.js";import"./ContextMenuSection-3gHTEPd_.js";import"./Dialog-C7TrFuKD.js";import"./Collection-Dsfmn2f2.js";import"./SelectionIndicator-Di9XKJuy.js";import"./SelectionManager-11E2v_vu.js";import"./useEvent-BnoPZq-r.js";import"./useCollator-Bf7H5Mv5.js";import"./FocusScope-CfFOF-ar.js";import"./VisuallyHidden-CZH0CwBW.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props}>
      <Label>Message</Label>
    </MarkdownEditor>
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 100
  }
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props} isInvalid defaultValue="hello">
      <FieldError>Invalid message</FieldError>
    </MarkdownEditor>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    allowResize: true
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    allowResize: "horizontal"
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    allowResize: "vertical"
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    allowResize: "vertical",
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <MarkdownEditor {...props} onChange={v => console.log(v)}>
        <Label>Message</Label>
      </MarkdownEditor>;
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const Nr=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable","WithOnChange","WithRef"];export{m as AutoResizeable,s as Default,a as Disabled,l as HorizontallyResizeable,c as Resizeable,n as ShowCharacterCount,u as VerticallyAndAutoResizeable,d as VerticallyResizeable,p as WithFieldError,i as WithLabel,g as WithOnChange,h as WithRef,Nr as __namedExportsOrder,Kr as default};
