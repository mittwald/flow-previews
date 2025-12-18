import{j as r,r as f}from"./iframe-BvEN2NvC.js";import{r as o,g as z}from"./TimeField-lCDwSgC8.js";import{L as R}from"./Label-RkJmXprF.js";import{B as b}from"./Button-Bs-8xdNz.js";import{S as x}from"./Section-DxQGOPA_.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-O5-VKPQz.js";import"./mergeRefs-g8AQtJ3m.js";import"./index-Cj5OZb7o.js";import"./clsx-B-dksMZM.js";import"./Accordion-BCRlOG0V.js";import"./dynamic-DLGtdFUV.js";import"./IconWarning-BXkJ-YfP.js";import"./ActionGroup-BZJifhVY.js";import"./Alert-C42HKgo7.js";import"./AlertIcon-DIx0PRwu.js";import"./useLocalizedStringFormatter-DGN2LQ2z.js";import"./context-BaB4gzT5.js";import"./AlertBadge-XnLcIBhb.js";import"./Text-B-pkYbpH.js";import"./browser-8558U_eE.js";import"./utils-C9Kbpp7Q.js";import"./EmulatedBoldText-6Mje0LKd.js";import"./Align-BNYYkpwl.js";import"./Popover-DQy7sKpB.js";import"./context-YRnoeiMa.js";import"./Button-rdkFrasx.js";import"./ProgressBar-BQTQq0xH.js";import"./Hidden-BwWPEWcQ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CLF9PT1b.js";import"./useFocusable-CY4PxcCA.js";import"./RSPContexts-BVxsMlKh.js";import"./Collection-2Wi3GcVI.js";import"./CollectionBuilder-BPHXmLic.js";import"./SelectionIndicator-BH4md7QJ.js";import"./Separator-B9TFzlzp.js";import"./useStatic-mqBjZ187.js";import"./OverlayTrigger-C-OXtxoJ.js";import"./TableFooterRow-Bbn0J-Fj.js";import"./SkeletonText-Bhrpszsw.js";import"./Avatar-DoJW0BST.js";import"./AvatarStack-Q_naNyxA.js";import"./Badge-By_J3NvW.js";import"./BigNumber-CCiAKU5q.js";import"./Breadcrumb-hvZPW9kp.js";import"./Link-8ro0Mgm2.js";import"./Legend-CWg-OgU1.js";import"./Heading-BmIYVqpT.js";import"./FileCardList-wULZQ2pe.js";import"./Image-DcRVgG1x.js";import"./Color-UnoQ_G4y.js";import"./Content-CW2666Kc.js";import"./ContextualHelpTrigger-Dg6Q6BSc.js";import"./CounterBadge-29Eky_dN.js";import"./DonutChart-hAMSRr4O.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BPYNB-H_.js";import"./Header-CzZTtWKn.js";import"./Initials-CMzRsNMX.js";import"./InlineCode-BJIBhEMp.js";import"./PopoverTrigger-CZadA-q7.js";import"./LoadingSpinner-sib-jng1.js";import"./Separator-DbRA9--m.js";import"./Message-CWiHvRIx.js";import"./MessageSeparator-BcRpZ2Jp.js";import"./NavigationGroup-BIJMiTrt.js";import"./Notification-Z9SSqstJ.js";import"./NotificationProvider-Bd1F4Dho.js";import"./ProgressBar-DlKcEA1p.js";import"./Rating-C71hnCIK.js";import"./Skeleton-C-NZiBB5.js";const Tr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},t={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(z,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:s=>console.log(s),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const s=f.useRef(null),w=()=>{s.current&&s.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:s,children:r.jsx(R,{children:"Message"})}),r.jsx(b,{type:"button",onClick:w,children:"Set focus"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
