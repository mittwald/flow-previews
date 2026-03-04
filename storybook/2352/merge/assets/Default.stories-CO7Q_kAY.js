import{j as r,r as f}from"./iframe-CwpToEZy.js";import{M as o}from"./MarkdownEditor-DCDNxG7l.js";import{L as R}from"./Label-BX1OHHkE.js";import{F as b}from"./FieldError-P_YSxT2d.js";import{B as z}from"./Button-Cw2xgR_6.js";import{S as x}from"./Section-C5Yt0rDG.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-DDn2eHnn.js";import"./CodeBlock-BzZNy3uV.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BP7stzfC.js";import"./IconWarning-BRui_VYo.js";import"./flowComponent-Cp6ETj3c.js";import"./index-BxA-n0N3.js";import"./index-G1voh-81.js";import"./remote-DRomu556.js";import"./Tooltip-DZc5NzeP.js";import"./utils-3nROwXn_.js";import"./OverlayArrow-Df1wGHjd.js";import"./useFocus-BFSvAolX.js";import"./ProgressBar-DhACqixk.js";import"./Label-CzzCYqTs.js";import"./Hidden-CMtZVdai.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C-XdPLXI.js";import"./context-DWVDZDUv.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CJeIxJct.js";import"./useControlledState-BvlK1ysl.js";import"./useFocusable-ixEZOImu.js";import"./react-children-utilities-BOSWx44x.js";import"./ActionBatch-DcvnwnMD.js";import"./useOverlayController-C-oxUxCp.js";import"./useStatic-CYuvZ5-t.js";import"./browser-DhIaf7O7.js";import"./getActionGroupSlot-DtR43x--.js";import"./dynamic-CfOleVAa.js";import"./useLocalizedStringFormatter-BTLJGA-d.js";import"./Heading-BXHG1LZb.js";import"./Heading-CAz3skDU.js";import"./RSPContexts-DAz7wbZz.js";import"./InlineCode-BShcXu0T.js";import"./Link-UOTtvUV0.js";import"./usePress-kUL6l53_.js";import"./Separator-DC-xQo_s.js";import"./Separator-DijFhA23.js";import"./CollectionBuilder-CJ-2mfaT.js";import"./Text-DRk3V-Fm.js";import"./EmulatedBoldText-YNefbpnq.js";import"./Text-Cb4d8n7F.js";import"./TextArea-Om1-37DK.js";import"./useFieldComponent-CneqxYGw.js";import"./useControlledHostValueProps-DFisVnNH.js";import"./FieldDescription-64izSUV5.js";import"./TextField-DdZox5rD.js";import"./FieldError-BoYVEB6S.js";import"./Form-Di0COYqU.js";import"./Group-CMfRs64V.js";import"./Input-Nsfgb7CY.js";import"./useTextField-UBSbKfTG.js";import"./useFormReset-BARG9uBg.js";import"./useFormValidation-pFRcrJM7.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-B3iqZ-8C.js";import"./AlertIcon-DEQIepDy.js";import"./LoadingSpinner-CN3jmE_K.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CuwTmUjn.js";import"./ContextMenuSection-vq3x4ZL9.js";import"./Dialog-CQ_DXP4m.js";import"./Collection-Dl7KIP8C.js";import"./SelectionIndicator-ByN8hOyY.js";import"./SelectionManager-H4qhMfG1.js";import"./useEvent-IGYK55GI.js";import"./useCollator-BrcTEP8q.js";import"./FocusScope-CBNoFIyM.js";import"./VisuallyHidden-CnggHClH.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
