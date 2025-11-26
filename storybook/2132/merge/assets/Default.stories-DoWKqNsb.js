import{j as r,r as f}from"./iframe-Ao-19aY7.js";import{r as o,g as z}from"./TimeField-Dga-XMzj.js";import{L as R}from"./Label-AFlDOwlr.js";import{B as b}from"./Button-_rMwV1Xt.js";import{S as x}from"./Section-2WoXliP6.js";import"./index-nuYtCEEu.js";import"./PropsContextProvider-Cs2UiszJ.js";import"./mergeRefs-CpqvPaGj.js";import"./index-Bwqp99l-.js";import"./clsx-B-dksMZM.js";import"./Accordion-g1Nkd-OG.js";import"./dynamic-BWdxymTp.js";import"./IconWarning-B7Z3gPWk.js";import"./ActionGroup-BgGdTMdO.js";import"./Alert-U6NTr8Od.js";import"./AlertIcon-C4DLD5al.js";import"./useLocalizedStringFormatter-C8j8z1fr.js";import"./context-7NlFttbo.js";import"./AlertBadge-ChGUqDlc.js";import"./Text-Cgpj2Q8N.js";import"./browser-BDaFAJwm.js";import"./utils-WPNuaWF4.js";import"./EmulatedBoldText-RvYGXArR.js";import"./Align-BbT-h_Cc.js";import"./Popover-wNAiL1x4.js";import"./context-voT1I8WS.js";import"./Button-CfbtfR1G.js";import"./ProgressBar-BcqTIQAj.js";import"./Hidden-C5KNGjq4.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-ByqSttt6.js";import"./useFocusable-BMboqtpt.js";import"./RSPContexts-Bd7Uumw6.js";import"./Collection-D6xC-F9z.js";import"./CollectionBuilder-BTcaQmh_.js";import"./SelectionIndicator-M10krl_K.js";import"./Separator-DI5W5_TB.js";import"./useStatic-CAyH9HjC.js";import"./OverlayTrigger-BCM2xdVL.js";import"./TableFooterRow-BwGlA40j.js";import"./SkeletonText-CbmbZ7fm.js";import"./Avatar-BhBRyywd.js";import"./AvatarStack-BZuHR7nK.js";import"./Badge-BuVQhiwS.js";import"./BigNumber-DSg8ShS_.js";import"./Breadcrumb-COHPTftu.js";import"./Link-NPcLnUZm.js";import"./Heading-QgN9T77K.js";import"./Legend-CpLZYkOf.js";import"./FileCardList-BgWOMS33.js";import"./Image-CdE7kzrE.js";import"./Color-DrlriSBP.js";import"./Content-BC-EzTEV.js";import"./ContextualHelpTrigger-B3G8FKik.js";import"./CounterBadge-Dj5sakNv.js";import"./DonutChart-56Bfv6wo.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DWXyrnjp.js";import"./Header-BkTYts4H.js";import"./Initials-DDzHo9v4.js";import"./InlineCode-C5oGO-2D.js";import"./PopoverTrigger-B0RiF3ar.js";import"./LoadingSpinner-Bt9_hZhS.js";import"./Separator-BRXjwrzz.js";import"./Message-CiVygppY.js";import"./MessageSeparator-Di_mCWbl.js";import"./NavigationGroup-JU6xFLtT.js";import"./Notification-BcOA895o.js";import"./NotificationProvider-BTG9WpBj.js";import"./ProgressBar-Db3cRUkt.js";import"./Rating-VGNHCp_t.js";import"./Skeleton-yWgO8i6q.js";const Tr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},t={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(z,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:s=>console.log(s),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const s=f.useRef(null),w=()=>{s.current&&s.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:s,children:r.jsx(R,{children:"Message"})}),r.jsx(b,{type:"button",onClick:w,children:"Set focus"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
