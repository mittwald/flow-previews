import{r as M,j as r}from"./iframe-DyMBbPqz.js";import{d as k,O as I,P as i,n as t,r as A}from"./PasswordCreationField-BXFpUAs8.js";import{L as P}from"./Label-CTeGDG4_.js";import{e as K}from"./chunk-PULGOXDA-8tYzn7uh.js";import{u as N,F as z,a as U}from"./Form-Dk1rGsGb.js";import{s as Y}from"./Action-BKD54bOg.js";import{B as h}from"./Button-BlPqNUGj.js";import{m as Z}from"./IconWarning-ZZpE0RLv.js";import{C as G}from"./CopyButton-D6mhKELe.js";import"./PropsContextProvider-D5JFbFDv.js";import"./mergeRefs-DzqYcA-L.js";import"./index-DOr1CDfn.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-rzK-dnZK.js";import"./utils-CVBG1xQY.js";import"./Text-CM2C2q3t.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-C7CCq00M.js";import"./Hidden-DDXBBs4Y.js";import"./useFocusRing-vfzYXE-6.js";import"./useFocus-DU8oSjU-.js";import"./TextField-COySyIxF.js";import"./Form-XPOYZQVX.js";import"./useLabel-_qDqqXns.js";import"./Label-BeoFpfOq.js";import"./useTextField-BufQoHeE.js";import"./useFormReset-BRpdsPso.js";import"./useControlledState-D80JYNPC.js";import"./useFocusable-DC8rXwC1.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-DTsDdte6.js";import"./FieldDescription-swfEez2j.js";import"./Text-CukGSnAt.js";import"./browser-n8MK_CxL.js";import"./EmulatedBoldText-xvO4zYSH.js";import"./Tooltip-DCuTnChb.js";import"./OverlayArrow-LvdRNExG.js";import"./ProgressBar-78wlbF0l.js";import"./context-Da3l2mom.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-Bkn65txD.js";import"./ReactAriaControlledValueFix-CrIU9IZY.js";import"./ContextualHelpTrigger-ywQXQBiA.js";import"./Popover-DeFJzkTr.js";import"./DialogTriggerView-DxOJ-uUS.js";import"./context-57hv7F4C.js";import"./useStatic-D-Em2Ifs.js";import"./Dialog-CGM20lGa.js";import"./Button-B4XEqpsk.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D3aMe8WM.js";import"./RSPContexts-BQIv_6Ah.js";import"./Collection-BmjshBTi.js";import"./CollectionBuilder-CRQRCBBG.js";import"./Separator-VLOdIwGI.js";import"./SearchField-Bdf4_ahw.js";import"./useEvent-65UMilnF.js";import"./SelectionManager-S-Cyaza4.js";import"./useCollator-CddKm6Uk.js";import"./FocusScope-D43MAOt-.js";import"./VisuallyHidden-CSYVn4hw.js";import"./Heading-CGGLd8uz.js";import"./Heading-DRXAMfzE.js";import"./useManagedValue-lO00UGLb.js";import"./getActionGroupSlot-D4TTw5G_.js";import"./LoadingSpinner-zaoUk7MO.js";import"./react-children-utilities-C9DA1KMO.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return K(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[A.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},ce={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(E=(_=u.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const de=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{n as Default,m as Disabled,p as Required,u as WithCopyButton,c as WithCustomButtons,d as WithForm,l as WithPlaceholder,de as __namedExportsOrder,ce as default};
