import{j as r,r as f}from"./iframe-BECefjM4.js";import{M as o}from"./MarkdownEditor-BZ0RlKCd.js";import{L as R}from"./Label-CVvbUjW4.js";import{F as b}from"./FieldError-B21MiKyw.js";import{B as z}from"./Button-DAjxqCNq.js";import{S as x}from"./Section-BJXV5he9.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-DQ6xQ6rm.js";import"./CodeBlock-CJUJKDme.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DlERDM35.js";import"./IconWarning-CvVn1QxU.js";import"./flowComponent-BuliJvUF.js";import"./index-CR5wd-c8.js";import"./index-BGQ8HYEh.js";import"./remote-CqI4D0us.js";import"./Tooltip-DNSKtrw5.js";import"./utils-bqUpXLHN.js";import"./OverlayArrow-C6gZr2kK.js";import"./useFocus-CIRpkrn7.js";import"./ProgressBar-f6I3NHnz.js";import"./Label-DPandUgz.js";import"./Hidden-DMWiq0rX.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-d0BVjP-J.js";import"./context-iJTSqlsV.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DIpVtkGc.js";import"./useControlledState-2Tdfwl5E.js";import"./useFocusable-DTBBh1VF.js";import"./react-children-utilities-C1152UKo.js";import"./ActionBatch-DZRJQ0Jr.js";import"./context-mnhTcWwX.js";import"./useStatic-Bcu2QKMg.js";import"./browser-C9O3Z26r.js";import"./getActionGroupSlot-5YMPQbIk.js";import"./dynamic-DJ76M0aZ.js";import"./useLocalizedStringFormatter-CcdVRlpp.js";import"./Heading-CqTYuCig.js";import"./Heading-Brz3JFJA.js";import"./RSPContexts-C61Ijawi.js";import"./InlineCode-hu7YM-ns.js";import"./Link-CJeQaYrr.js";import"./usePress-427CihAL.js";import"./Separator-DnNVi8PJ.js";import"./Separator-Ba2twhHH.js";import"./CollectionBuilder-mQKTvAir.js";import"./Text-lZ2PbEqF.js";import"./EmulatedBoldText-DVZs9jiX.js";import"./Text-IrzRAzMs.js";import"./TextArea-BE8Z0rWs.js";import"./useFieldComponent-B5iNz-5m.js";import"./useControlledHostValueProps-Del_bpsM.js";import"./FieldDescription-BgERXXFv.js";import"./TextField-Bz70SPLT.js";import"./FieldError-8R1qsZQS.js";import"./Form-FdseNRzi.js";import"./Group-BHV0qvDi.js";import"./Input-BXsG1hsf.js";import"./useTextField-CmkUv5OG.js";import"./useFormReset-CDquwT_C.js";import"./useFormValidation-I8j-SbQp.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DIDGLLaX.js";import"./AlertIcon-B57cAQNM.js";import"./LoadingSpinner-DXxHNnrx.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CUoWVSdf.js";import"./ContextMenuSection-C8VBWo1V.js";import"./Dialog-BvIZXNXz.js";import"./Collection-dp2xzFhV.js";import"./SelectionIndicator-B2vofSgQ.js";import"./SelectionManager-Oe0Hh4DI.js";import"./useEvent-C3AnDdDF.js";import"./useCollator-r-PMcESO.js";import"./FocusScope-CjCXh94P.js";import"./VisuallyHidden-GWiC-wFe.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
