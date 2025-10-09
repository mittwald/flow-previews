import{j as r,r as V}from"./iframe-woTOwd7_.js";import{M as e}from"./MarkdownEditor-BNqut2yA.js";import{L as l}from"./Label-BMPYi4BS.js";import{F as _}from"./FieldError-cqKK9eum.js";import{B as A}from"./Button-CqXZY3YI.js";import{S as H}from"./Section-Dn3mIjYv.js";import"./index-Cun1SEai.js";import"./Markdown-BKDQtmUR.js";import"./CodeBlock-C4_G_cs_.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CZ1diLpq.js";import"./IconWarning-DjIAWUJ_.js";import"./flowComponent-B-uEZ_V3.js";import"./index-qiybc8_t.js";import"./index-C7RKIbtQ.js";import"./Tooltip-DAQ3-VKl.js";import"./ClearPropsContextView-CjyS1sud.js";import"./utils-D3yPsyL0.js";import"./OverlayArrow-CJHhfWFg.js";import"./useFocus-BFXKtnCR.js";import"./ProgressBar-utMpytcX.js";import"./Label-Cing85ZS.js";import"./Hidden-BDYhUzcR.js";import"./filterDOMProps-CghfNOdR.js";import"./context-FI-dTyul.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-BiOxSYVP.js";import"./useFocusable-BkuBS6Cc.js";import"./useFocusRing-CTuyXOeV.js";import"./react-children-utilities-DPuuSww3.js";import"./Action-BlHQAv7W.js";import"./context-BxwyR-58.js";import"./useStatic-DuP9qB1q.js";import"./browser-B4P6bty3.js";import"./getActionGroupSlot-Bh4vYXcV.js";import"./dynamic-C-nO0pE1.js";import"./useLocalizedStringFormatter-D-GXZJS3.js";import"./Heading-C0FiA7i7.js";import"./Heading-BBFlLFGc.js";import"./RSPContexts-BwXj6WuG.js";import"./InlineCode-DBEQ-9Bw.js";import"./Link-BMoBUUDj.js";import"./usePress-DGvsG6co.js";import"./Separator-C5f9QrZK.js";import"./Separator-CLneeuje.js";import"./CollectionBuilder-Dn4dC_2r.js";import"./Text-BJYnGCYe.js";import"./EmulatedBoldText-BDnx0pnN.js";import"./Text-CI6uvf20.js";import"./TextArea-COm4WitK.js";import"./TextFieldBase-VtSyMFod.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-BHmj1dCI.js";import"./TextField-C63YTa_x.js";import"./FieldError-DhBue0La.js";import"./context-bBTqONPe.js";import"./Form-B8f020lP.js";import"./Group-BsSeV8DT.js";import"./Input-BBLm8t4P.js";import"./useTextField-ruai01e5.js";import"./useFormReset-DJCienz-.js";import"./useFormValidation-BteaOxt3.js";import"./ReactAriaControlledValueFix-Dqc8mqip.js";import"./useManagedValue-D-7TbSF4.js";import"./LoadingSpinner-CNqJtC-J.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BJ7HgVKa.js";import"./ContextMenuSection-C3ToUB4_.js";import"./Dialog-BSqtdg0s.js";import"./Collection-hCvzUTfz.js";import"./SelectionManager-DNqlxfyL.js";import"./useEvent-DFvoPCa0.js";import"./useCollator-DvLXcCH3.js";import"./FocusScope-CzW3cjLK.js";import"./VisuallyHidden-C2zuidlV.js";const mo={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(_,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=V.useRef(null),T=()=>{t.current&&t.current.focus()};return r.jsxs(H,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(A,{type:"button",onClick:T,children:"Set focus"})]})}};var u,h,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,x,M;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
