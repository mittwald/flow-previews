import{r as M,j as r}from"./iframe-DOdCrrz9.js";import{d as k,O as I,P as i,n as t,r as A}from"./PasswordCreationField-DObh8_LO.js";import{L as P}from"./Label-CdGOe_rR.js";import{e as K}from"./chunk-PULGOXDA-8tYzn7uh.js";import{u as N,F as z,a as U}from"./Form-CBGxxw_L.js";import{s as Y}from"./Action-mSB8KV6a.js";import{B as h}from"./Button-B4t52lNZ.js";import{q as Z}from"./IconWarning-B_Db9Y2d.js";import{C as G}from"./CopyButton-B-y-F8Uf.js";import"./dynamic-bhcJ8YER.js";import"./PropsContextProvider-BFFPDLjZ.js";import"./mergeRefs-VmgBpgq4.js";import"./index-CLjbgznf.js";import"./clsx-B-dksMZM.js";import"./FieldError-Dz-HK9bS.js";import"./utils-BhoG2uU0.js";import"./Text-Cec-yt4l.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-CGSoOA49.js";import"./Hidden-Csx_ZN67.js";import"./useFocusRing-DgTZQDGQ.js";import"./useFocus-D8b650dP.js";import"./TextField-D3yV1HlH.js";import"./Form-D1kKLxzM.js";import"./useLabel-nPFfwg7P.js";import"./Label-CUfl9ZIc.js";import"./useTextField-E_po2vaq.js";import"./useFormReset-BZL1wYkF.js";import"./useControlledState-DT9C-0RB.js";import"./useFocusable-C6B3BW3Y.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-ebeXoxd5.js";import"./FieldDescription-CYQ0foI7.js";import"./Text-BFGg7rBT.js";import"./browser-ChoqAG5f.js";import"./EmulatedBoldText-CTisuoOf.js";import"./Tooltip-CV-IOCnN.js";import"./ClearPropsContextView-Br_9Bgha.js";import"./ProgressBar-CMaicEWm.js";import"./context-B_SSW0HI.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-D2q5K-i7.js";import"./ReactAriaControlledValueFix-DjqYTo4V.js";import"./ContextualHelpTrigger-C9SMAssP.js";import"./Popover-D2I_wG2X.js";import"./DialogTriggerView-aJwD6Ful.js";import"./context-CptZziwP.js";import"./useStatic-6ENCHy3p.js";import"./Button-BQ3dFx8x.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Cgctm68w.js";import"./RSPContexts-OikXJV7Y.js";import"./FocusScope-BZjUyJi9.js";import"./useCollator-DDFrVUE2.js";import"./VisuallyHidden-CbboIbzH.js";import"./Collection-D29CaRkM.js";import"./CollectionBuilder-DNDqtAqI.js";import"./Separator-D4a_mIW-.js";import"./SearchField-D44cV1AG.js";import"./useEvent-DybSIsxD.js";import"./SelectionManager-DE4WCsU3.js";import"./Heading-B3Vm_Aux.js";import"./Heading-BOxaabaZ.js";import"./useManagedValue-mKiIsQ3Q.js";import"./getActionGroupSlot-B_tXH0Q6.js";import"./LoadingSpinner-iDIwh9pR.js";import"./react-children-utilities-Wld1AjuW.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return K(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[A.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(C=(f=m.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var F,j,S;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(S=(j=p.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var B,D,v;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...(v=(D=l.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};var R,L,T;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...(T=(L=c.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var V,q,W;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const customPolicy = Policy.fromDeclaration(policyDecl);
    const form = useForm({
      defaultValues: {
        password: ""
      }
    });
    return <Form form={form} onSubmit={async values => {
      await sleep(2000);
      console.log("submitted", values);
    }}>
        <Field rules={{
        required: true,
        validate: generatePasswordCreationFieldValidation(customPolicy)
      }} name="password">
          <PasswordCreationField validationPolicy={customPolicy}>
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
        </Field>
        <br />
        <Button onPress={() => form.reset()}>Reset</Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(W=(q=d.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var O,_,E;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(E=(_=u.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const ce=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{n as Default,m as Disabled,p as Required,u as WithCopyButton,c as WithCustomButtons,d as WithForm,l as WithPlaceholder,ce as __namedExportsOrder,le as default};
