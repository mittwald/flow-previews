import{r as M,j as r}from"./iframe-B9WJ5iKj.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-h972D4Bz.js";import{L as P}from"./Label-Txm3TZUN.js";import{u as N,F as z,a as U}from"./Form-CZL4xkFP.js";import{s as Y}from"./Action-BKjYIDhz.js";import{B as h}from"./Button-D_a9cGts.js";import{m as Z}from"./IconWarning-iA3abBs4.js";import{C as G}from"./CopyButton-C0xlgqkC.js";import"./PropsContextProvider-CGbAkxa2.js";import"./mergeRefs-DdPqSpPT.js";import"./index-DKUVlu-x.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-DavyfSHK.js";import"./utils-DB8fltME.js";import"./Text-COQnmlIw.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-Cz3tZ_vF.js";import"./Hidden-DsQKnrr0.js";import"./useFocusRing-BfWSMilO.js";import"./useFocus-hMfli9CJ.js";import"./TextField-DKiK_bQe.js";import"./Form-FBD95hlW.js";import"./useLabel-oUVSUbln.js";import"./Label-D_4wO_RK.js";import"./useTextField-CTUt_DB_.js";import"./useFormReset-X7y3l5xq.js";import"./useControlledState-DqBsJvcb.js";import"./useFocusable-uW0l0Nx0.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-BOUOKYBY.js";import"./FieldDescription-BeSAjbke.js";import"./Text-CSPzXI-q.js";import"./browser-BOk1fb3_.js";import"./EmulatedBoldText-C7rcw5Ry.js";import"./Tooltip-CmQ1HOCN.js";import"./OverlayArrow-CE7drKv_.js";import"./ProgressBar-C1_1cHyi.js";import"./context-B6-GkfV2.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-DFSg5pkm.js";import"./ReactAriaControlledValueFix-BPmbd47m.js";import"./ContextualHelpTrigger-BO8ks8oW.js";import"./Popover-CeU9-gLu.js";import"./DialogTriggerView-C_MYOBvn.js";import"./context-WaClvBnE.js";import"./useStatic-oaWlYVrV.js";import"./Dialog-D5fJjWQP.js";import"./Button-BgiaEGOw.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Cwd9gmzr.js";import"./RSPContexts-CDVdjyBw.js";import"./Collection-DJgASAUx.js";import"./CollectionBuilder-C14ghNrk.js";import"./Separator-dmjViTlK.js";import"./SearchField-DA0x0iyL.js";import"./useEvent-CBc3F-6H.js";import"./SelectionManager-CfvJ92XB.js";import"./useCollator-2x6iNpQz.js";import"./FocusScope-aIFO3fHs.js";import"./VisuallyHidden-BITg658c.js";import"./Heading-BA4dFWVo.js";import"./Heading-ir8hZIQC.js";import"./getActionGroupSlot-DpnJzbbM.js";import"./LoadingSpinner-BLFdik4W.js";import"./react-children-utilities-Cv2jxGK0.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
