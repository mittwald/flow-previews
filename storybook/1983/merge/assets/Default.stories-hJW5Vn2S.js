import{r as M,j as r}from"./iframe-BAGTntfB.js";import{d as k,O as I,P as i,n as t,r as A}from"./PasswordCreationField-Ct18MYRh.js";import{L as P}from"./Label-f9Yl8NxA.js";import{e as K}from"./chunk-PULGOXDA-8tYzn7uh.js";import{u as N,F as z,a as U}from"./Form-CY4BaXMY.js";import{s as Y}from"./Action-BhAAiBfS.js";import{B as h}from"./Button-ClQyukEh.js";import{q as Z}from"./IconWarning-SECJkQke.js";import{C as G}from"./CopyButton-5APNpDz-.js";import"./dynamic-DicyFJZ2.js";import"./PropsContextProvider-BVEq68NN.js";import"./mergeRefs-Ct4YEWrU.js";import"./index-TExY8AE4.js";import"./clsx-B-dksMZM.js";import"./FieldError-DwSlV6wI.js";import"./utils-DSdQ5U5C.js";import"./Text-CZggwRKM.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-CQeggyQD.js";import"./Hidden-BFcGcOTS.js";import"./useFocusRing-uRy9P7F2.js";import"./useFocus-kqlw9bYS.js";import"./TextField-CGb-3Yan.js";import"./Form-BImra2vo.js";import"./useLabel-jLc0StSH.js";import"./Label-CWJf374V.js";import"./useTextField-aRRnCdTt.js";import"./useFormReset-DMVQ-F_N.js";import"./useControlledState-hqI-vqoJ.js";import"./useFocusable-CvI8LjKe.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-CzxDQYV0.js";import"./FieldDescription-BTtZPQbf.js";import"./Text-oSCAFhn5.js";import"./browser-D8tJ8M3I.js";import"./EmulatedBoldText-hfJfJt2X.js";import"./Tooltip-BUysOg5h.js";import"./OverlayArrow-CIJbDC1X.js";import"./ProgressBar-yPlEiM2Y.js";import"./context-C8vSVPtT.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-DdilTbMd.js";import"./ReactAriaControlledValueFix-Bf896QU8.js";import"./ContextualHelpTrigger-DeBcdY55.js";import"./Popover-DIu09GMY.js";import"./DialogTriggerView-BimJk9-6.js";import"./context-B68punRm.js";import"./useStatic-B7HpxjOi.js";import"./Button-DldLr0Dh.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BeTrTVD4.js";import"./RSPContexts-u_LIQrA5.js";import"./FocusScope-Dx9vsLFf.js";import"./useCollator-C2nKvxEE.js";import"./VisuallyHidden-CCDJ4X70.js";import"./Collection-CyU2lrEr.js";import"./CollectionBuilder-BjHCxw5W.js";import"./Separator-BoyfOubv.js";import"./SearchField-BATSQzLF.js";import"./useEvent-DLvyF1-Y.js";import"./SelectionManager-DNLJemTe.js";import"./Heading-B2joHeSr.js";import"./Heading-qcJaN4U_.js";import"./useManagedValue-Ceuh4DB4.js";import"./getActionGroupSlot-Bf03GRoZ.js";import"./LoadingSpinner-DuAh__4X.js";import"./react-children-utilities-DXBRBUvV.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return K(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[A.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
