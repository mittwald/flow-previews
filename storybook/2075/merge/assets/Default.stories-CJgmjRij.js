import{j as r,r as f}from"./iframe-C9dYfgSf.js";import{M as o}from"./MarkdownEditor-BkYURivM.js";import{L as R}from"./Label-huPJyomh.js";import{F as z}from"./useFieldComponent-Br5YSvi-.js";import{B as b}from"./Button-RNpKkVK8.js";import{S as x}from"./Section-DQdw2BcZ.js";import"./index-nuYtCEEu.js";import"./Markdown-BixfWJ__.js";import"./CodeBlock-BE1g0ZrE.js";import"./clsx-B-dksMZM.js";import"./CopyButton-kFt2-fFK.js";import"./IconWarning-fVXPK3i1.js";import"./flowComponent-Bze_r9FR.js";import"./index-CVihxOyi.js";import"./index-DbMX5jmM.js";import"./Tooltip-3RuYs7ja.js";import"./ClearPropsContextView-DPeL6MiY.js";import"./ClearPropsContext-oIIvwL5Y.js";import"./utils-CO6LnGLR.js";import"./OverlayArrow-CkkZdON1.js";import"./useFocus-xkgg1n29.js";import"./ProgressBar-BM6quT-y.js";import"./Label-HJzRYjqm.js";import"./Hidden-C5ZQOCSQ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DpM9fuaR.js";import"./context-iM_q7ty8.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-DlEEU1a1.js";import"./useFocusable-U5sjNWcc.js";import"./useFocusRing-29NBTIcT.js";import"./react-children-utilities-DAjt5CEG.js";import"./Action-BrSPa5cY.js";import"./context-BXzGXLkM.js";import"./useStatic-BaiCJrRH.js";import"./browser-CNYhznL3.js";import"./getActionGroupSlot-CRNg2W87.js";import"./dynamic-4HLWwwwW.js";import"./useLocalizedStringFormatter-DHpih7p2.js";import"./Heading-Bk9PzEEg.js";import"./Heading-D3uq54pF.js";import"./RSPContexts-BkJpVpLi.js";import"./InlineCode-BbNjsp81.js";import"./Link-XChpnkCx.js";import"./usePress-BlhdQGL7.js";import"./Separator-DgYQywqf.js";import"./Separator-j1ISyAzV.js";import"./CollectionBuilder-tXiCZVVh.js";import"./Text-DeJ4PaiG.js";import"./EmulatedBoldText-WKOr2IKU.js";import"./Text-CQ7Fwsu6.js";import"./TextArea-D-0TJTtk.js";import"./TextFieldBase-sNCN9Rfp.js";import"./FieldDescription-aE3p3Nfy.js";import"./TextField-Cfjxq2lC.js";import"./Form-CYcFTCJ6.js";import"./Group-DC27XkzE.js";import"./Input-B4cpKRwG.js";import"./useTextField-fnhO15Be.js";import"./useFormReset-CCon2GTP.js";import"./useFormValidation-cSt72451.js";import"./ReactAriaControlledValueFix-1U2pzmCq.js";import"./useManagedValue-znAKCBZ4.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DDIQ3dza.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CD1zJvoj.js";import"./ContextMenuSection-1UGXIKfR.js";import"./Dialog-W7ChNaVu.js";import"./Collection-BLbQf80v.js";import"./SelectionIndicator-BcmkxpDt.js";import"./SelectionManager-jzyqiCAr.js";import"./useEvent-D_pA9wfR.js";import"./useCollator-C7M5jLo1.js";import"./FocusScope-BDFIEW4R.js";import"./VisuallyHidden-Ck6pQyeO.js";const Jr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(z,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowHorizontalResize:!0}},d={args:{allowVerticalResize:!0}},u={args:{allowVerticalResize:!0,rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(b,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    allowHorizontalResize: true
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    allowVerticalResize: true
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    allowVerticalResize: true,
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
}`,...h.parameters?.docs?.source}}};const Kr=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable","WithOnChange","WithRef"];export{m as AutoResizeable,s as Default,a as Disabled,l as HorizontallyResizeable,c as Resizeable,n as ShowCharacterCount,u as VerticallyAndAutoResizeable,d as VerticallyResizeable,p as WithFieldError,i as WithLabel,g as WithOnChange,h as WithRef,Kr as __namedExportsOrder,Jr as default};
