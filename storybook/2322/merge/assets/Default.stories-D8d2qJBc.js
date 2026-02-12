import{j as r,r as f}from"./iframe-jPI25t47.js";import{M as o}from"./MarkdownEditor-BE_HDiFp.js";import{L as R}from"./Label-CVxkn5sg.js";import{F as b}from"./FieldError-DPfGZS1P.js";import{B as z}from"./Button-CMdL10Ys.js";import{S as x}from"./Section-wgX4yeQq.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-B_ITw8OA.js";import"./CodeBlock-C4CSen9M.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DzTZT-c4.js";import"./IconWarning-D8uDJDej.js";import"./flowComponent-NWkTmrxz.js";import"./index-Cv1Y71KG.js";import"./index-mBlsDuvj.js";import"./remote-B_as-6Bm.js";import"./Tooltip-UeZq3lYx.js";import"./utils-DssEHlsW.js";import"./OverlayArrow-2srpU7pW.js";import"./useFocus-DZAeMhz-.js";import"./ProgressBar-BB7XDz1a.js";import"./Label-gIBQebAF.js";import"./Hidden-BHJ1gGty.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CJgKbpp_.js";import"./context-yJg27e0-.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-PgP7-E1A.js";import"./useControlledState-CujVadxA.js";import"./useFocusable-YzLAhItH.js";import"./react-children-utilities-DbvdOJlU.js";import"./ActionBatch-DVEQdHps.js";import"./useOverlayController-Cy5LcSUF.js";import"./useStatic-Be080qZz.js";import"./browser-BKdBfXKE.js";import"./getActionGroupSlot-Dnhmurp_.js";import"./dynamic-DcvTJJQa.js";import"./useLocalizedStringFormatter-DiGz--zc.js";import"./Heading-BYBgSNBh.js";import"./Heading-BvtnHnmW.js";import"./RSPContexts-COITpNJr.js";import"./InlineCode-D3E28T4r.js";import"./Link-ChzTXjZ1.js";import"./usePress-Bv9bKc9w.js";import"./Separator-C0qEGuBi.js";import"./Separator-DfJMhgbG.js";import"./CollectionBuilder-AJ1JuT2m.js";import"./Text-CzRKl4Rn.js";import"./EmulatedBoldText-BPBEsAY6.js";import"./Text-BUiBuDRU.js";import"./TextArea-DgIWsqeS.js";import"./useFieldComponent-CHdLkU8r.js";import"./useControlledHostValueProps-AQocOlOa.js";import"./FieldDescription-BijM-gJh.js";import"./TextField-PW0iysUb.js";import"./FieldError-C3mwkvrq.js";import"./Form-BeysAUF2.js";import"./Group-CAA0eQzC.js";import"./Input-DUaj7rN4.js";import"./useTextField-BD2R3zQz.js";import"./useFormReset-DGTIvKtn.js";import"./useFormValidation-aAlw1sTR.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-D2z5AzT8.js";import"./AlertIcon-HKJqs1Pu.js";import"./LoadingSpinner-DhHtGG23.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-GVmiAxmL.js";import"./ContextMenuSection-BG427zDb.js";import"./Dialog-C4XHiXzR.js";import"./Collection-D3v-sdZg.js";import"./SelectionIndicator-SHoPDQ8G.js";import"./SelectionManager-C-0YEkIp.js";import"./useEvent-DZfip6aA.js";import"./useCollator-TV1MmAHK.js";import"./FocusScope-QARcb0VX.js";import"./VisuallyHidden-vrC_Lu36.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
