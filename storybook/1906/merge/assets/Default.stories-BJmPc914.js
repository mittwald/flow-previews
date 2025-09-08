import{j as r}from"./iframe-CB_IvR8I.js";import{M as o}from"./MarkdownEditor-BZJWadf5.js";import{L as l}from"./Label-DQjiInKi.js";import{F as V}from"./FieldError-COPLGoQY.js";import{u as q,F as P,a as T}from"./Form-DpTUUNrZ.js";import{B as A}from"./Button-B6pH5E7T.js";import"./Markdown-4aiR1q_v.js";import"./CodeBlock-DQFzagDf.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BmwpaDbZ.js";import"./IconWarning-DHvxn9zQ.js";import"./PropsContextProvider-CQ73sAu4.js";import"./mergeRefs-CSVQQCMz.js";import"./index-dvXJvLk3.js";import"./Tooltip-QT9S7QV8.js";import"./utils-g_K47B_Q.js";import"./OverlayArrow-01R9fjkr.js";import"./useFocus-B0PqsM1A.js";import"./ProgressBar-DB_rXcaP.js";import"./Label-kjSyRRrG.js";import"./Hidden-jmCIdXP6.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DNzpHOuu.js";import"./context-CQpLcUPr.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CS3WyH2d.js";import"./useFocusable-B2StGM5o.js";import"./useFocusRing-gt8SzE7T.js";import"./react-children-utilities-Rjxv6AYF.js";import"./Action-DXrBr-ZU.js";import"./context-B4EC4nRx.js";import"./useStatic-y0oZYxL5.js";import"./browser-CyPw7Cgt.js";import"./getActionGroupSlot-Bj-rdEEm.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-BKMvXLmW.js";import"./Heading-5jxFfyfL.js";import"./Heading-9QvowWck.js";import"./RSPContexts-PWzkBgmU.js";import"./InlineCode-B_eeOBtV.js";import"./Link-z4v83iI8.js";import"./usePress-BSSkfFZ6.js";import"./Separator-wGTKGT7D.js";import"./Separator-Bv7qspKp.js";import"./CollectionBuilder-opZAg4uy.js";import"./Text-C_h1oOw9.js";import"./EmulatedBoldText-B-vVao8K.js";import"./Text-B8w1c0_W.js";import"./TextArea-DUii50sV.js";import"./TextFieldBase-Dw3h-uuj.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-CzRSGrqM.js";import"./TextField-nXjEyJdg.js";import"./FieldError-7I8SRRkd.js";import"./Form-BSDtEK6z.js";import"./Group-BtoN_DlS.js";import"./useTextField-Dvn-D0Cy.js";import"./useFormReset-DVL0Bkgs.js";import"./ReactAriaControlledValueFix-DdwC-f5X.js";import"./LoadingSpinner-B018WmYG.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BNZImaSB.js";const{action:K}=__STORYBOOK_MODULE_ACTIONS__,Zr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},t={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(V,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},d={render:e=>{const s=q({defaultValues:{message:""}});return r.jsxs(P,{form:s,onSubmit:async z=>{K(z.message),s.reset()},children:[r.jsx(T,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(o,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(A,{type:"submit",children:"Submit"})]})}},c={render:e=>r.jsx(o,{...e,onChange:s=>console.log(s),children:r.jsx(l,{children:"Message"})})};var u,g,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var b,x,M;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
