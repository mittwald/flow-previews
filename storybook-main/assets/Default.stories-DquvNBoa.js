import{j as r,r as V}from"./iframe-BA6fDn45.js";import{M as e}from"./MarkdownEditor-ZyRTMubQ.js";import{L as l}from"./Label-12Swj0ll.js";import{F as _}from"./FieldError-C4B-9J1n.js";import{B as A}from"./Button-CMSL1MHe.js";import{S as H}from"./Section-BxQ4KpXF.js";import"./index-Cun1SEai.js";import"./Markdown-D1rLRTnL.js";import"./CodeBlock-Dv9AneIn.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DyH5DnGl.js";import"./IconWarning-RvG5V2Gg.js";import"./flowComponent-DAuYRjCP.js";import"./index-DovfTAQ1.js";import"./index-DorRoXow.js";import"./Tooltip-Dd83jeSL.js";import"./ClearPropsContextView-Dalrb-H-.js";import"./utils-B0PKDg6J.js";import"./OverlayArrow-DBwRAJ-a.js";import"./useFocus-DSzhmy1b.js";import"./ProgressBar-BfpmuxQQ.js";import"./Label-CM7Rtudl.js";import"./Hidden-BWmE1vDO.js";import"./filterDOMProps-CghfNOdR.js";import"./context-D6O0cSe8.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-DgfMlGIn.js";import"./useFocusable-20QGmjfJ.js";import"./useFocusRing-BRVUU_95.js";import"./react-children-utilities-BHEDLtP1.js";import"./Action-CxZ_aWnU.js";import"./context-aU6YV9zZ.js";import"./useStatic-Dc3NgXvq.js";import"./browser-BAFOwcQV.js";import"./getActionGroupSlot-DOaaGACl.js";import"./dynamic-B5xcbnuy.js";import"./useLocalizedStringFormatter-CoI3i-Zj.js";import"./Heading-BL-NFR7s.js";import"./Heading-BAuF_2Ob.js";import"./RSPContexts-BrsSHeal.js";import"./InlineCode-Cm4wBDop.js";import"./Link-B4XMGLK_.js";import"./usePress-BQkI-aJ9.js";import"./Separator-BEwHsqdH.js";import"./Separator-CFMHi57C.js";import"./CollectionBuilder-CyubYm4y.js";import"./Text-BB_jWM0A.js";import"./EmulatedBoldText-Dom6ilWt.js";import"./Text-BlF9rzJU.js";import"./TextArea-B20cbayd.js";import"./TextFieldBase-i1_eh-aT.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-Cm7kZs03.js";import"./TextField-DpW3onl2.js";import"./FieldError-DSSHPUap.js";import"./context-DwuzVRtg.js";import"./Form-BO5siFlo.js";import"./Group-Bspax4i2.js";import"./Input-DxM6bhLy.js";import"./useTextField-CKMYuI1w.js";import"./useFormReset-DffYIxF4.js";import"./useFormValidation-Da1DrGKi.js";import"./ReactAriaControlledValueFix-BuCZ9tyO.js";import"./useManagedValue-dxc0gsG-.js";import"./LoadingSpinner-Dgd8j7jz.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DSXpZTIL.js";import"./ContextMenuSection-BgHMRQz7.js";import"./Dialog-CYKhgjuk.js";import"./Collection-D4YkJ3N5.js";import"./SelectionManager-DMXqcscO.js";import"./useEvent-D6ZMwboe.js";import"./useCollator-ynWs3FsB.js";import"./FocusScope-B1mU0Ypz.js";import"./VisuallyHidden-D1tpk_Z3.js";const mo={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(_,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=V.useRef(null),T=()=>{t.current&&t.current.focus()};return r.jsxs(H,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(A,{type:"button",onClick:T,children:"Set focus"})]})}};var u,h,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,x,M;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(y=(O=d.parameters)==null?void 0:O.docs)==null?void 0:y.source}}};const co=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","Resizeable","WithOnChange","WithRef"];export{s as Default,a as Disabled,m as Resizeable,n as ShowCharacterCount,p as WithFieldError,i as WithLabel,c as WithOnChange,d as WithRef,co as __namedExportsOrder,mo as default};
