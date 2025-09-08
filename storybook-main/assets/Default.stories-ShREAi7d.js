import{j as r}from"./iframe-CVONDZxG.js";import{M as o}from"./MarkdownEditor-BShTuR2x.js";import{L as l}from"./Label-BrXx0WEV.js";import{F as V}from"./FieldError-uzL1sI7k.js";import{u as q,F as P,a as T}from"./Form-CVeywl-a.js";import{B as A}from"./Button-CPWkxiPl.js";import"./Markdown-DLWhVHez.js";import"./CodeBlock-FjVoyMjp.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DLWDKstV.js";import"./IconWarning-CjssIWkt.js";import"./PropsContextProvider-BHJ1i56Q.js";import"./mergeRefs-TXfZ5z39.js";import"./index-C4vkAaOo.js";import"./Tooltip-9HzLslnZ.js";import"./utils-BSjfMHTl.js";import"./OverlayArrow-DGSmKKnj.js";import"./useFocus-D78mW_re.js";import"./ProgressBar-DrI-uHFO.js";import"./Label-DJefMWg6.js";import"./Hidden-BwiNP3dS.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-jVeBX_ap.js";import"./context-Bs2g7JPB.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-KXE4Dwqt.js";import"./useFocusable-DkfZWGFH.js";import"./useFocusRing-B7s00iLq.js";import"./react-children-utilities-CPP_DMUs.js";import"./Action-CutvWoZ3.js";import"./context-DdZgH6qQ.js";import"./useStatic-Duh0tpLB.js";import"./browser-BiAec6cY.js";import"./getActionGroupSlot-WI0cGZqP.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-CII2PiuM.js";import"./Heading-x080Pesz.js";import"./Heading-47qrmuz0.js";import"./RSPContexts-DNP2NapF.js";import"./InlineCode-Sh6K-4XG.js";import"./Link-DKZSM0Pn.js";import"./usePress-zhVroEZ0.js";import"./Separator-DAv9vm7e.js";import"./Separator-CO7E1Mbo.js";import"./CollectionBuilder-CePrgAQb.js";import"./Text-gWNENs-O.js";import"./EmulatedBoldText-CnL_Am8U.js";import"./Text-Doa1PxMD.js";import"./TextArea-BWYydMpa.js";import"./TextFieldBase-OseZ9qS8.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-Bh5pV_Db.js";import"./TextField-Bq5WehIb.js";import"./FieldError-D3nW9ApF.js";import"./Form-BgCAIeRI.js";import"./Group-BUf8QsAy.js";import"./useTextField-6Xm8NcSF.js";import"./useFormReset-D4oFtU7p.js";import"./ReactAriaControlledValueFix-D3XqzeSn.js";import"./LoadingSpinner-DIlTVHYE.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-38xdtiYe.js";const{action:K}=__STORYBOOK_MODULE_ACTIONS__,Zr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},t={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(V,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},d={render:e=>{const s=q({defaultValues:{message:""}});return r.jsxs(P,{form:s,onSubmit:async z=>{K(z.message),s.reset()},children:[r.jsx(T,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(o,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(A,{type:"submit",children:"Submit"})]})}},c={render:e=>r.jsx(o,{...e,onChange:s=>console.log(s),children:r.jsx(l,{children:"Message"})})};var u,g,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var b,x,M;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(M=(x=a.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var f,w,E;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props}>
      <Label>Message</Label>
    </MarkdownEditor>
}`,...(E=(w=i.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var F,S,j;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 100
  }
}`,...(j=(S=n.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var C,L,k;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props} isInvalid defaultValue="hello">
      <FieldError>Invalid message</FieldError>
    </MarkdownEditor>
}`,...(k=(L=m.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var W,v,O;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...(O=(v=p.parameters)==null?void 0:v.docs)==null?void 0:O.source}}};var R,_,D;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => {
    const form = useForm({
      defaultValues: {
        message: ""
      }
    });
    return <Form form={form} onSubmit={async v => {
      action(v.message);
      form.reset();
    }}>
        <Field name="message" rules={{
        required: "Please enter a message"
      }}>
          <MarkdownEditor {...props}>
            <Label>Message</Label>
          </MarkdownEditor>
        </Field>
        <br />
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(D=(_=d.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var B,I,y;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: props => {
    return <MarkdownEditor {...props} onChange={v => console.log(v)}>
        <Label>Message</Label>
      </MarkdownEditor>;
  }
}`,...(y=(I=c.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};const $r=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","Resizeable","WithForm","WithOnChange"];export{t as Default,a as Disabled,p as Resizeable,n as ShowCharacterCount,m as WithFieldError,d as WithForm,i as WithLabel,c as WithOnChange,$r as __namedExportsOrder,Zr as default};
