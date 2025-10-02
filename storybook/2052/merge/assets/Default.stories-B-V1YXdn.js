import{j as r,r as V}from"./iframe-hiH37hms.js";import{M as e}from"./MarkdownEditor-7w1rjJYV.js";import{L as l}from"./Label-DzM9UWDP.js";import{F as _}from"./FieldError-BChewV0h.js";import{B as A}from"./Button-BrzTi3gr.js";import{S as H}from"./Section-B8yRiADO.js";import"./index-Cun1SEai.js";import"./Markdown-Bh3Mee57.js";import"./CodeBlock-CZ4A0aIu.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DxmUHfcJ.js";import"./IconWarning-Cse0Xf0Q.js";import"./flowComponent-00c8POVD.js";import"./index-CTy9APi5.js";import"./index-BJu77HCL.js";import"./Tooltip-DjArnuQV.js";import"./ClearPropsContextView-BL5bUN3p.js";import"./utils-JHWv327y.js";import"./OverlayArrow-CEJUr9iX.js";import"./useFocus-B9-o-MIg.js";import"./ProgressBar-CDjSE3x2.js";import"./Label-C0jnYKOc.js";import"./Hidden-XcASwwlw.js";import"./filterDOMProps-CghfNOdR.js";import"./context-DRH00eGt.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-BFPCb-Qt.js";import"./useFocusable-C2_7lwWJ.js";import"./useFocusRing-WUR2BD9e.js";import"./react-children-utilities-CYBZOoJV.js";import"./Action-BsGu1LRs.js";import"./context-riC63IcS.js";import"./useStatic-8hqO5zoY.js";import"./browser-BuBe5AKm.js";import"./getActionGroupSlot-BVQ8sE7Q.js";import"./dynamic-BmCJXizF.js";import"./useLocalizedStringFormatter-BRvamSQ7.js";import"./Heading-OoTPR-HK.js";import"./Heading-CRf9y3R9.js";import"./RSPContexts-DTJHlpNa.js";import"./InlineCode-0Qfu-_wM.js";import"./Link-CelcyI2A.js";import"./usePress-BhsWghka.js";import"./Separator-GCbNcYxf.js";import"./Separator-DghpaL2h.js";import"./CollectionBuilder-DEp0jGGn.js";import"./Text-CsOmTVyE.js";import"./EmulatedBoldText-BNkr3bPM.js";import"./Text-UKwjxOKq.js";import"./TextArea-D0p2FX3U.js";import"./TextFieldBase-BJaai17v.js";import"./FieldDescription-CK5IXO12.js";import"./TextField-BxAS6IXD.js";import"./FormField.module-CapR5K3V.js";import"./context-BuwG6neX.js";import"./Form-stGXRgys.js";import"./Group-BAo_3ehk.js";import"./Input-DYBCaGaK.js";import"./useTextField-Gz5Lvra1.js";import"./useFormReset-BDeOlo8n.js";import"./useFormValidation-DybUzXH7.js";import"./ReactAriaControlledValueFix-BfvPjJZR.js";import"./useFieldComponent-CPFfLOL8.js";import"./useManagedValue-BKx_l-W3.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DMdJqtIF.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BSe0nnji.js";import"./ContextMenuSection-Co8KQTmA.js";import"./Dialog-i0N_hzHI.js";import"./Collection-BgRsBBN2.js";import"./SelectionManager-CSTWFJsn.js";import"./useEvent-CS-uDTBx.js";import"./useCollator-5PyA7SnE.js";import"./FocusScope-C5smDGs3.js";import"./VisuallyHidden-C5VBpvXq.js";const co={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(_,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=V.useRef(null),T=()=>{t.current&&t.current.focus()};return r.jsxs(H,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(A,{type:"button",onClick:T,children:"Set focus"})]})}};var u,h,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,x,M;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(M=(x=a.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var E,w,b;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props}>
      <Label>Message</Label>
    </MarkdownEditor>
}`,...(b=(w=i.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var R,S,C;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 100
  }
}`,...(C=(S=n.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var j,L,k;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props} isInvalid defaultValue="hello">
      <FieldError>Invalid message</FieldError>
    </MarkdownEditor>
}`,...(k=(L=p.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var F,W,v;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...(v=(W=m.parameters)==null?void 0:W.docs)==null?void 0:v.source}}};var D,z,B;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: props => {
    return <MarkdownEditor {...props} onChange={v => console.log(v)}>
        <Label>Message</Label>
      </MarkdownEditor>;
  }
}`,...(B=(z=c.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var I,O,y;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(y=(O=d.parameters)==null?void 0:O.docs)==null?void 0:y.source}}};const lo=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","Resizeable","WithOnChange","WithRef"];export{s as Default,a as Disabled,m as Resizeable,n as ShowCharacterCount,p as WithFieldError,i as WithLabel,c as WithOnChange,d as WithRef,lo as __namedExportsOrder,co as default};
