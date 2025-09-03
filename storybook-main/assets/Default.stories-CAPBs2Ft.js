import{r as M,j as r}from"./iframe-DjexR8Tp.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-BVCqZ7lY.js";import{L as P}from"./Label-CLVda-nU.js";import{u as N,F as z,a as U}from"./Form-DVFYvkrF.js";import{s as Y}from"./Action-DUBUW5Iv.js";import{B as h}from"./Button-DYqAz9Ax.js";import{m as Z}from"./IconWarning-iYDgM4y1.js";import{C as G}from"./CopyButton-AWcdBG7k.js";import"./PropsContextProvider-CNncApHm.js";import"./mergeRefs-CBM20YoL.js";import"./index-D_XyFzRd.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-By7Lq8z0.js";import"./utils-T6f7ZmRV.js";import"./Text-Xp1USGoa.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-CtcjVW7W.js";import"./Hidden-DuO80z64.js";import"./useFocusRing-DmJAPvY7.js";import"./useFocus-Bu01zz1F.js";import"./TextField-DsmYuxt9.js";import"./Form-BEAgwaeD.js";import"./useLabel-Ott8nG03.js";import"./Label-Guiqn7_R.js";import"./useTextField-DhOhnSWz.js";import"./useFormReset-DuzsM7E6.js";import"./useControlledState-rTz5CSzi.js";import"./useFocusable-C3y7tw8Z.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-CesaJiuj.js";import"./FieldDescription-CwiwIRwR.js";import"./Text-aOHzhDvr.js";import"./browser-B8Z7dOtx.js";import"./EmulatedBoldText-DPzl8Gjb.js";import"./Tooltip-DLaqwZ3r.js";import"./OverlayArrow-OIwcMk6i.js";import"./ProgressBar-DpKa1PlM.js";import"./context-CVxCaAZx.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-DCr69HqY.js";import"./ReactAriaControlledValueFix-BsvkGL9L.js";import"./ContextualHelpTrigger-OB2-_LMo.js";import"./Popover-CvxF9MLE.js";import"./DialogTriggerView-B9cJTcHh.js";import"./context-DVKjoroo.js";import"./useStatic-BfaH_n72.js";import"./Dialog-D-o_xP1i.js";import"./Button-B9QzJYPZ.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-mG8JzCXO.js";import"./RSPContexts-BkQTRtx0.js";import"./Collection-CuM96cDy.js";import"./CollectionBuilder-CkLqU0EG.js";import"./Separator-BbijxOJI.js";import"./SearchField-CEGXi6ip.js";import"./useEvent-CO0sOg2Z.js";import"./SelectionManager-BV1kevWQ.js";import"./useCollator-DwaKC1E9.js";import"./FocusScope-CeR_G6vH.js";import"./VisuallyHidden-CwBbURTG.js";import"./Heading-DiglFhW3.js";import"./Heading-ByG_Ikfv.js";import"./getActionGroupSlot-CoanvWNS.js";import"./LoadingSpinner-D4t9V_YE.js";import"./react-children-utilities-CXhtQ3PI.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(T=(L=c.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var V,W,q;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(q=(W=d.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var O,_,E;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(E=(_=u.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const le=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{n as Default,m as Disabled,p as Required,u as WithCopyButton,c as WithCustomButtons,d as WithForm,l as WithPlaceholder,le as __namedExportsOrder,pe as default};
