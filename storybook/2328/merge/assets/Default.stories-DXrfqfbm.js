import{j as r,r as f}from"./iframe-olJof__V.js";import{M as o}from"./MarkdownEditor-Bs8mmvIN.js";import{L as R}from"./Label-6dyeRQav.js";import{F as b}from"./FieldError-l4UC5eIi.js";import{B as z}from"./Button-CPlz8rsS.js";import{S as x}from"./Section-xajLDDkQ.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-C5s7S1_q.js";import"./CodeBlock-BaxWk39o.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DGrrqmnV.js";import"./IconWarning-Dxqo3db7.js";import"./flowComponent-CoGNni0d.js";import"./index-DXuGOHKQ.js";import"./index-CQizCcaV.js";import"./remote-BFSWQwUW.js";import"./Tooltip-0oRpL3fs.js";import"./utils-B7tchdhx.js";import"./OverlayArrow-B-0VQUib.js";import"./useFocus-C7qSpl6p.js";import"./ProgressBar-CgXlpLJ2.js";import"./Label-DdZBH8rR.js";import"./Hidden-DoUj_dUj.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CtYRRhYq.js";import"./context-DOTF4vQp.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-D32aTWMq.js";import"./useControlledState-CGGJ5ydn.js";import"./useFocusable-3WtiVhvt.js";import"./react-children-utilities-Dt_ZyOVr.js";import"./ActionBatch-DqsTFo-5.js";import"./useOverlayController-CA843Gf5.js";import"./useStatic-DVdbIJHO.js";import"./browser-IACFT9IC.js";import"./getActionGroupSlot-CoFa2pz_.js";import"./dynamic-C_FBHMxE.js";import"./useLocalizedStringFormatter-DTXdFjR3.js";import"./Heading-CFjejIim.js";import"./Heading-CZbujKCp.js";import"./RSPContexts-BVirgRiO.js";import"./InlineCode-Cmh9DJoy.js";import"./Link-zAbyTmSL.js";import"./usePress-UZLq5kUQ.js";import"./Separator-Cepkjnks.js";import"./Separator-8BcW__js.js";import"./CollectionBuilder-vpp5jjd8.js";import"./Text-Dd-S15-B.js";import"./EmulatedBoldText-BFx3xjvZ.js";import"./Text-PinZmeRI.js";import"./TextArea-C7OOIkGj.js";import"./useFieldComponent-BI2nSVzd.js";import"./useControlledHostValueProps-4eMgz5oX.js";import"./FieldDescription-Brn6Ug7r.js";import"./TextField-8qzEMlSf.js";import"./FieldError-kWwHEGnK.js";import"./Form-C73O4P0Z.js";import"./Group-BEx-apCS.js";import"./Input-C1ZdZWYR.js";import"./useTextField-1B8nRVmv.js";import"./useFormReset-BYGWiUrU.js";import"./useFormValidation-D5cIPr0y.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DHxSCH5W.js";import"./AlertIcon-DL26tbpe.js";import"./LoadingSpinner-CT-rb4W5.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BzbIVXwM.js";import"./ContextMenuSection-C9tKIY6H.js";import"./Dialog-DOR07iZd.js";import"./Collection-WZVC-4xi.js";import"./SelectionIndicator-D2HcZFFA.js";import"./SelectionManager-DXB33zuh.js";import"./useEvent-CNSbk4we.js";import"./useCollator-DxO-TF_t.js";import"./FocusScope-Db9L4ciT.js";import"./VisuallyHidden-D0VqbVmf.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
