import{j as r,r as f}from"./iframe-C_XCETJ4.js";import{M as o}from"./MarkdownEditor-BrZRJ9JH.js";import{L as R}from"./Label-C05Lio9F.js";import{F as b}from"./FieldError-Cv_CJ9jj.js";import{B as z}from"./Button-BRKehz01.js";import{S as x}from"./Section-BxK_Nbwa.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-DXwYKdNu.js";import"./CodeBlock-CXFq00wX.js";import"./clsx-B-dksMZM.js";import"./CopyButton-B1_Ji0qq.js";import"./IconWarning-D8ZYq2sU.js";import"./flowComponent-Dc7MSmoT.js";import"./index-BDg420Zs.js";import"./index-BzhLFU3i.js";import"./remote-BBIBCAlv.js";import"./Tooltip-CR3Bs1Gb.js";import"./utils-Bso2FrGw.js";import"./OverlayArrow-DucIvLHR.js";import"./useFocus-D-vzktAn.js";import"./ProgressBar-D_N9hIFl.js";import"./Label-BzKkLHI6.js";import"./Hidden-D0LCwc-B.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DQxA1BA6.js";import"./context-CpOW4Kl4.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-Dl1uWSge.js";import"./useControlledState-CeDypDyB.js";import"./useFocusable-CMVXl80p.js";import"./react-children-utilities-BQ-9M5CC.js";import"./ActionBatch-TqepIOEV.js";import"./context-BzuZVooY.js";import"./useStatic-CKCyvBOK.js";import"./browser-BQl26QHV.js";import"./getActionGroupSlot-Cq5jnsjJ.js";import"./dynamic-DjbOT4dP.js";import"./useLocalizedStringFormatter-BgkeYfOl.js";import"./Heading-42b9lNh5.js";import"./Heading-Cm7wIRHP.js";import"./RSPContexts-PVsy4Zek.js";import"./InlineCode-Cfu_Qsq4.js";import"./Link-DkaoxxaB.js";import"./usePress-B-xR971w.js";import"./Separator-BcDW-NBI.js";import"./Separator-DVQsYJWe.js";import"./CollectionBuilder-DdGNM8fa.js";import"./Text-l7AxHvJY.js";import"./EmulatedBoldText-D4ZS6afz.js";import"./Text-CpxVEUdG.js";import"./TextArea-D9GQX069.js";import"./useFieldComponent-K9rhjMxn.js";import"./useControlledHostValueProps-sh2cWMdB.js";import"./FieldDescription-9KiMe7M1.js";import"./TextField-BDy93HHg.js";import"./FieldError-5QFQIGqn.js";import"./Form-Bpra3FZF.js";import"./Group-BtgHmZ3N.js";import"./Input-54bUd5Aj.js";import"./useTextField-DD8e8EGD.js";import"./useFormReset-CmrFi5aC.js";import"./useFormValidation-CsbIfaDX.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-B-9KJ9sd.js";import"./AlertIcon-Bo1DHsRX.js";import"./LoadingSpinner-dY4_o8YP.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DIlWiE4j.js";import"./ContextMenuSection-D5WrvUWV.js";import"./Dialog-BbJdb0zX.js";import"./Collection-CCUOgigu.js";import"./SelectionIndicator-CpgeLwVt.js";import"./SelectionManager-u6LzT-I5.js";import"./useEvent-BcXuQ_We.js";import"./useCollator-CSjtRqd2.js";import"./FocusScope-f515rn4z.js";import"./VisuallyHidden-Bb8hL7UW.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
