import{j as r,r as f}from"./iframe-BEQP9uXD.js";import{M as o}from"./MarkdownEditor-ngF0pIZv.js";import{L as R}from"./Label-ULyyAOQY.js";import{F as b}from"./FieldError-DcwQV8mK.js";import{B as z}from"./Button-C9UvHdV0.js";import{S as x}from"./Section-CiWy9GDM.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-DargvlFb.js";import"./CodeBlock-DiSZgSn0.js";import"./clsx-B-dksMZM.js";import"./CopyButton-C0tzq3PW.js";import"./IconWarning-BArZWwdB.js";import"./flowComponent-84Jhttbw.js";import"./index-CA9bKJEG.js";import"./index-COHhcPte.js";import"./remote-Ba3iobwA.js";import"./Tooltip-MhQ92_Fv.js";import"./utils-CvsvUfaH.js";import"./OverlayArrow-B0-Exi0z.js";import"./useFocus-DENBDZ81.js";import"./ProgressBar-CsmWPwQb.js";import"./Label-DEkvlGAI.js";import"./Hidden-BRgRW0lF.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BaFA04Xw.js";import"./context-DjvYmnOm.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-IAFCDfDW.js";import"./useFocusable-WQftMZYd.js";import"./useFocusRing-QizZnVOy.js";import"./react-children-utilities-BVe_Bs8q.js";import"./Action-DdIVuJ0B.js";import"./context-DGvxxzOj.js";import"./useStatic-DVE9BYeG.js";import"./browser-D8S-En3T.js";import"./getActionGroupSlot-B63naLE5.js";import"./dynamic-BAr_-wMD.js";import"./useLocalizedStringFormatter-CVsWWxAE.js";import"./Heading-Cy1GdqFq.js";import"./Heading-KUn82X_l.js";import"./RSPContexts-22nxuYm5.js";import"./InlineCode-CuSxk8YU.js";import"./Link-xt6yF4pl.js";import"./usePress-BjEuYOvC.js";import"./Separator-BuCKgUC6.js";import"./Separator-CwdQYf1y.js";import"./CollectionBuilder-DgIT4THq.js";import"./Text-BQmA_ZwI.js";import"./EmulatedBoldText-BYVdDx5b.js";import"./Text-Dh3KhDzI.js";import"./TextArea-Ca9ROihq.js";import"./TextFieldBase-DQMA3YKg.js";import"./FieldDescription-rVRfuQA7.js";import"./useFieldComponent-BKGW_bMF.js";import"./TextField-CNCmb0GP.js";import"./FieldError-WngkcyXU.js";import"./Form-BbvSEhBq.js";import"./Group-CxkWfpob.js";import"./Input-Cnu3k7gd.js";import"./useTextField-DjOri4ui.js";import"./useFormReset-QF_OYRwm.js";import"./useFormValidation-Kra5hQIO.js";import"./useControlledHostValueProps-CCaFJO-n.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-J3TBTDdf.js";import"./AlertIcon-aU-KTTvT.js";import"./LoadingSpinner-Dfl-93Ba.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BLAt4FO4.js";import"./ContextMenuSection-Xp9S-BLD.js";import"./Dialog-DQ54l-rN.js";import"./Collection-DrDb7tKr.js";import"./SelectionIndicator-Baqg4pYL.js";import"./SelectionManager-Cg9_nPGa.js";import"./useEvent-d-xS6mf7.js";import"./useCollator-Dxy4kckI.js";import"./FocusScope-D5mGJCBF.js";import"./VisuallyHidden-BLDMQ79k.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
