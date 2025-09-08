import{j as r}from"./iframe-DIlFkKfe.js";import{M as o}from"./MarkdownEditor-DHezj8lf.js";import{L as l}from"./Label-BSjWh_q0.js";import{F as V}from"./FieldError-D7S_o8t1.js";import{u as q,F as P,a as T}from"./Form-B2OQdXzw.js";import{B as A}from"./Button-BvaN7Y-D.js";import"./Markdown-CU1wn8od.js";import"./CodeBlock-D4USWHhz.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BO7CclDk.js";import"./IconWarning-BS6-kuBv.js";import"./PropsContextProvider-DpgT95xr.js";import"./mergeRefs-TbbaDpSF.js";import"./index-DOnHcB6O.js";import"./Tooltip-ONW80TkE.js";import"./utils-E_0WoXkF.js";import"./OverlayArrow-C5Az4zJe.js";import"./useFocus-CiEitWNM.js";import"./ProgressBar-CN0cToBP.js";import"./Label-op2mctQl.js";import"./Hidden-b1169DFL.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BtXixU_d.js";import"./context-BIl-kujG.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CWVlWyPG.js";import"./useFocusable-BKL1JWl8.js";import"./useFocusRing-VlAoxJyj.js";import"./react-children-utilities-Da520Ouy.js";import"./Action-R0JS_3NZ.js";import"./context-SLpiSpKp.js";import"./useStatic-D-gec7Hx.js";import"./browser-CN7RW_LC.js";import"./getActionGroupSlot-I5c5cWG6.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-C2YSpIsm.js";import"./Heading-CxdU82fh.js";import"./Heading-uk9khgL8.js";import"./RSPContexts-BFg1cs6H.js";import"./InlineCode-tTxXa1PV.js";import"./Link-BvGpLIZU.js";import"./usePress-D9JeOi6r.js";import"./Separator-D-pb10LV.js";import"./Separator-BYxoqALx.js";import"./CollectionBuilder-Dgy9FRg7.js";import"./Text-CG4Ucl9p.js";import"./EmulatedBoldText-hH9OpyJt.js";import"./Text-DuUlrCBa.js";import"./TextArea-BSi9iW94.js";import"./TextFieldBase-DXki4XOz.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-s_Lc-ZQl.js";import"./TextField-BSCkD-qq.js";import"./FieldError-5aNzky8T.js";import"./Form-HyfIN8sB.js";import"./Group-CabJqO_k.js";import"./useTextField-Bo95H554.js";import"./useFormReset-BM0i_QS2.js";import"./ReactAriaControlledValueFix-OIaBx3G8.js";import"./LoadingSpinner-wlCv7fWm.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-pHXSBUAI.js";const{action:K}=__STORYBOOK_MODULE_ACTIONS__,Zr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},t={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(V,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},d={render:e=>{const s=q({defaultValues:{message:""}});return r.jsxs(P,{form:s,onSubmit:async z=>{K(z.message),s.reset()},children:[r.jsx(T,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(o,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(A,{type:"submit",children:"Submit"})]})}},c={render:e=>r.jsx(o,{...e,onChange:s=>console.log(s),children:r.jsx(l,{children:"Message"})})};var u,g,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var b,x,M;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
