import{j as r,r as f}from"./iframe-BBX1MRm7.js";import{M as o}from"./MarkdownEditor-C-E1yexq.js";import{L as R}from"./Label-rzq6PBW8.js";import{F as b}from"./FieldError-DhG2ZYTr.js";import{B as z}from"./Button-BqkPfHUM.js";import{S as x}from"./Section-BkJ3a6Gx.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-KaaD2GVi.js";import"./CodeBlock-SZ-mL5Ad.js";import"./clsx-B-dksMZM.js";import"./CopyButton-B0yXoxxq.js";import"./IconWarning-D1rdipwB.js";import"./flowComponent-79ppapas.js";import"./index-BNLEYWOE.js";import"./index-CaVys9ny.js";import"./remote-DQSNjr8v.js";import"./Tooltip-BFeo_gBW.js";import"./utils-BavrKavc.js";import"./OverlayArrow-CEy0Lp_c.js";import"./useFocus-CEW7w8cP.js";import"./ProgressBar-BlLvdox5.js";import"./Label-dmshrR3q.js";import"./Hidden-BWx-3ZWW.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CwE3wslu.js";import"./context-CZSumH6g.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-Bm9tRP_O.js";import"./useControlledState-hVcOsExM.js";import"./useFocusable-DP1OjJqD.js";import"./react-children-utilities-DZWshuLL.js";import"./Action-NfMU4pZQ.js";import"./context-CbNZJEnz.js";import"./useStatic-eT6_SwdI.js";import"./browser-94--rh0I.js";import"./getActionGroupSlot-Cs4GvwwL.js";import"./dynamic-CGdtYp29.js";import"./useLocalizedStringFormatter-BVVru5D3.js";import"./Heading-DWMQjpKC.js";import"./Heading-L9MMZJmE.js";import"./RSPContexts-Bzvj4RyS.js";import"./InlineCode-3_rzboE6.js";import"./Link-BQlGd_9b.js";import"./usePress-C19iJYYn.js";import"./Separator-BBaNGFnr.js";import"./Separator-CBat6_46.js";import"./CollectionBuilder-CT5wpjPQ.js";import"./Text-bZjB6G95.js";import"./EmulatedBoldText-B_ZrZeLf.js";import"./Text-Dx1GcOD_.js";import"./TextArea-BGtOT9Mo.js";import"./TextFieldBase-BECaGeob.js";import"./FieldDescription-D0h9kvob.js";import"./useFieldComponent-B_qWTKJx.js";import"./TextField-B6jqJ0Dq.js";import"./FieldError-C_UdMObt.js";import"./Form-CFIny17O.js";import"./Group-C1xuy7HP.js";import"./Input-DVyLg-xr.js";import"./useTextField-Bwh7GfLW.js";import"./useFormReset--Sx8IrxJ.js";import"./useFormValidation-CjGCqCfM.js";import"./useControlledHostValueProps-DKX7miYN.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BesKIlLk.js";import"./AlertIcon-Bzw_XkQ4.js";import"./LoadingSpinner-D7vBft_f.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BJia7Ggt.js";import"./ContextMenuSection-C-rpOjJk.js";import"./Dialog-DxFT1h3e.js";import"./Collection-KvAmq1BM.js";import"./SelectionIndicator-BhUr7H-C.js";import"./SelectionManager-BqxHDxhn.js";import"./useEvent-9YiOq-bW.js";import"./useCollator-BBRvdoV2.js";import"./FocusScope-geYyY5OG.js";import"./VisuallyHidden-B0NnPUX1.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const Pr=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable","WithOnChange","WithRef"];export{m as AutoResizeable,s as Default,a as Disabled,l as HorizontallyResizeable,c as Resizeable,n as ShowCharacterCount,u as VerticallyAndAutoResizeable,d as VerticallyResizeable,p as WithFieldError,i as WithLabel,g as WithOnChange,h as WithRef,Pr as __namedExportsOrder,Nr as default};
