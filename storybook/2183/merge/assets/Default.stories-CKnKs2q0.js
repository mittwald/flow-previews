import{j as r,r as f}from"./iframe-BfTJ8OoU.js";import{r as o,g as z}from"./TimeField-Dni6ZWL5.js";import{L as R}from"./Label-OsD2mDHN.js";import{B as b}from"./Button-CAnEum-p.js";import{S as x}from"./Section-ieM08Mfc.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-pKtaUqJb.js";import"./mergeRefs-C4nh5J5i.js";import"./index-wBRAyXy5.js";import"./clsx-B-dksMZM.js";import"./Accordion-EetxEBhv.js";import"./dynamic-BLLy2Odl.js";import"./IconWarning-CnDmU8KM.js";import"./ActionGroup-BXvzv2B4.js";import"./Alert-CFx8_uD8.js";import"./AlertIcon-Bk9PFIDr.js";import"./useLocalizedStringFormatter-BuC6mQ9L.js";import"./context-DfwvGs8v.js";import"./AlertBadge-zn-1W_0t.js";import"./Text-ChPpwgcs.js";import"./browser-_NOMM9Cq.js";import"./utils-CAkX6XFC.js";import"./EmulatedBoldText-Do8p-rFi.js";import"./Align-DLans5uB.js";import"./Popover-DxokbZnr.js";import"./context-DqfyIwOm.js";import"./Button-v46gVvAB.js";import"./ProgressBar-BquNzOVV.js";import"./Hidden-Chv29Vof.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-D-g0YXE4.js";import"./useFocusable-DTCTS8eh.js";import"./RSPContexts-B_hP9IPu.js";import"./Collection-B-SpNygI.js";import"./CollectionBuilder-Cew6fxQL.js";import"./SelectionIndicator-BLntbEi9.js";import"./Separator-B1RL2fWY.js";import"./useStatic-DZbTJ5BB.js";import"./OverlayTrigger-CvXwRqat.js";import"./TableFooterRow-BfBKGOJY.js";import"./SkeletonText-BAh3LYCP.js";import"./Avatar-DBLpjnAX.js";import"./AvatarStack-BHU-_pXB.js";import"./Badge-B1Bj-2mY.js";import"./BigNumber-BzAzuR-m.js";import"./Breadcrumb-DO48AN_q.js";import"./Link-fRrhQgjx.js";import"./Heading-C_Cd2XWG.js";import"./Legend-D59IIsbr.js";import"./FileCardList-Crd4-rJi.js";import"./Image-D7QRJIgn.js";import"./Color-BcE30bux.js";import"./Content-BbEJXFUy.js";import"./ContextualHelpTrigger-BBU6ZCx4.js";import"./CounterBadge-qpjoO2b-.js";import"./DonutChart-DSkqB0Nj.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-D4r4pUSf.js";import"./Header-DgEQtgXz.js";import"./Initials-DNuviWyX.js";import"./InlineCode-OjIKEpaK.js";import"./PopoverTrigger-zZ3JKVIV.js";import"./LoadingSpinner-CDSlajDH.js";import"./Separator-B5S4ffvA.js";import"./Message-Bivfjnxf.js";import"./MessageSeparator-BWNjQn1R.js";import"./NavigationGroup-JMiAIgUz.js";import"./Notification-6ZwISdx7.js";import"./NotificationProvider-BNxs8g7x.js";import"./ProgressBar-BlJq2aYe.js";import"./Rating-BodFdmqC.js";import"./Skeleton--CLyUYrz.js";const Tr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},t={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(z,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:s=>console.log(s),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const s=f.useRef(null),w=()=>{s.current&&s.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:s,children:r.jsx(R,{children:"Message"})}),r.jsx(b,{type:"button",onClick:w,children:"Set focus"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const _r=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable","WithOnChange","WithRef"];export{m as AutoResizeable,t as Default,a as Disabled,l as HorizontallyResizeable,c as Resizeable,n as ShowCharacterCount,u as VerticallyAndAutoResizeable,d as VerticallyResizeable,p as WithFieldError,i as WithLabel,g as WithOnChange,h as WithRef,_r as __namedExportsOrder,Tr as default};
