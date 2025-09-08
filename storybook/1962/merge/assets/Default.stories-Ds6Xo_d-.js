import{j as r}from"./iframe-CW4eA9k4.js";import{M as o}from"./MarkdownEditor-qPMmeS8-.js";import{L as l}from"./Label-BmbUI49G.js";import{F as V}from"./FieldError-DDMeD0d0.js";import{u as q,F as P,a as T}from"./Form-Bh3TNRhF.js";import{B as A}from"./Button-BjlFMLDb.js";import"./Markdown-Dn7aHLKW.js";import"./CodeBlock-MnPpaJ7o.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DvBlRT-C.js";import"./IconWarning-D1jj5TJf.js";import"./PropsContextProvider-Bql0h4A2.js";import"./mergeRefs-BcYJB-lQ.js";import"./index-B6-53XGK.js";import"./Tooltip-CMWvflPa.js";import"./utils-LQZW6rX9.js";import"./OverlayArrow-92dvWqKB.js";import"./useFocus-rpK25HP0.js";import"./ProgressBar-CmNSRDCs.js";import"./Label-Bbcp5SCN.js";import"./Hidden-DmXjFFnH.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CsKDXT_H.js";import"./context-DFsoEI_J.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Dx2k1uzE.js";import"./useFocusable-UDevydpZ.js";import"./useFocusRing-O7qNIesH.js";import"./react-children-utilities-C8ZLJxGz.js";import"./Action-Bf9Z-Hza.js";import"./context-D5N2lUOa.js";import"./useStatic-DUg3iw8_.js";import"./browser-CS0dj8Dh.js";import"./getActionGroupSlot-vBeuxSBi.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-Cgh8agJ8.js";import"./Heading-ukkjVDjs.js";import"./Heading-Bs47TW4c.js";import"./RSPContexts--2BkcUf2.js";import"./InlineCode-ynBFAYYV.js";import"./Link-CKcJS3Hs.js";import"./usePress-Du8ADkCR.js";import"./Separator-DslvCjmz.js";import"./Separator-DG994JLx.js";import"./CollectionBuilder-COr3RMXa.js";import"./Text-Db3UCsEl.js";import"./EmulatedBoldText-Dbwzf73Y.js";import"./Text-CUI2zCQ5.js";import"./TextArea-DWXw07Us.js";import"./TextFieldBase-YyeI2pd6.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-DHRtWdZV.js";import"./TextField-B9ZB3AOz.js";import"./FieldError-DfDNH_Ov.js";import"./Form-Carw_-CN.js";import"./Group-dsIczUwA.js";import"./useTextField-Cdkp1LGI.js";import"./useFormReset-C1QC8NQi.js";import"./ReactAriaControlledValueFix-BsA3nL3X.js";import"./LoadingSpinner-BE9DZA1q.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-LSmOeJqu.js";const{action:K}=__STORYBOOK_MODULE_ACTIONS__,Zr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},t={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(V,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},d={render:e=>{const s=q({defaultValues:{message:""}});return r.jsxs(P,{form:s,onSubmit:async z=>{K(z.message),s.reset()},children:[r.jsx(T,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(o,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(A,{type:"submit",children:"Submit"})]})}},c={render:e=>r.jsx(o,{...e,onChange:s=>console.log(s),children:r.jsx(l,{children:"Message"})})};var u,g,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var b,x,M;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
