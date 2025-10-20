import{r as v,j as r}from"./iframe-CuPb25cv.js";import{a as c,u as f,F as h,t as O}from"./Form-D3dPEjiA.js";import{L as i}from"./Label-BZpLTozc.js";import{B as o}from"./Button-Cy_FSVpl.js";import{S as T}from"./Section-B55_57D7.js";import{A as q}from"./ActionGroup-BCzfYI9o.js";import{s as F}from"./Action-CE7P3CGA.js";import{d as _,O as D,P as n,n as t,r as W}from"./PasswordCreationField-B7l6_4qb.js";import{e as R}from"./isPromise-APPd_fLV-8tYzn7uh.js";import{F as A}from"./useFieldComponent-D7Smil9s.js";import"./index-Cun1SEai.js";import"./flowComponent-7fMtXNgu.js";import"./index-CslL-pQh.js";import"./clsx-B-dksMZM.js";import"./index-DkEiVX-f.js";import"./Text-2_ekHeae.js";import"./browser-1QXSrBs6.js";import"./EmulatedBoldText-aijrrTX2.js";import"./Text-DqFBqxgU.js";import"./utils-rjde634_.js";import"./useLocalizedStringFormatter-C6GTeGHr.js";import"./context-Cf_eXnNJ.js";import"./Label.module-CUYTf9Jc.js";import"./Label-B7k3ity1.js";import"./Hidden-CG2yJe_k.js";import"./IconWarning-CLSl9yKt.js";import"./LoadingSpinner-BlCTpLFY.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DVhMN4v1.js";import"./ProgressBar-CiugOVQS.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BpP9sX_8.js";import"./useFocus-Cts5O1ED.js";import"./useFocusRing-rCVkEzcT.js";import"./useFocusable-CMpHMgWZ.js";import"./ContextMenuSection-D_Ue6SpG.js";import"./Dialog-CfTpgVgc.js";import"./RSPContexts-xO1N3or9.js";import"./OverlayArrow-iWeFoukr.js";import"./useControlledState-zpPREGnC.js";import"./Collection-CNWEIWZq.js";import"./CollectionBuilder-Dw6bvv_r.js";import"./SelectionIndicator-H-x2PvD-.js";import"./Separator-DV0TabKR.js";import"./SelectionManager-mI79mw48.js";import"./useEvent-BuJ7ERaN.js";import"./useCollator-D4PCkYMI.js";import"./FocusScope-Dlp3dq5q.js";import"./VisuallyHidden-CoDyqh9l.js";import"./dynamic-CGQ0FoZ_.js";import"./getActionGroupSlot-DZJjgnxC.js";import"./useStatic-BfPJwRSw.js";import"./context-B692btnM.js";import"./Group-CwH8Xmuc.js";import"./Input-DxrKJDZ_.js";import"./TextField-D8WUfi5z.js";import"./Form-BCVzxl1k.js";import"./useTextField-459gVrKP.js";import"./useFormReset-Cj0hiSlt.js";import"./useFormValidation-DUD5vlRz.js";import"./FieldDescription-C0wUj9vw.js";import"./Tooltip-XK3F9AOy.js";import"./ClearPropsContextView-B81Rbv-y.js";import"./ClearPropsContext-1rzIpp4D.js";import"./ReactAriaControlledValueFix-DRH_PgL6.js";import"./ContextualHelpTrigger-DBnMpJXf.js";import"./Popover-DSazfz_3.js";import"./useOverlayController-BcI7ttWx.js";import"./OverlayContextProvider-yb4dqhDz.js";import"./OverlayTrigger-D5mv_HOJ.js";import"./ControlledNotification-DU2FrdIO.js";import"./Heading-DyK_r6HL.js";import"./Heading-CSLfLI3i.js";import"./useManagedValue-Di8zsDa6.js";import"./react-children-utilities-OY5o0O78.js";const I=(e=_)=>{const a=v.useMemo(()=>D.fromDeclaration(e),[e]);return async m=>{if(!m)return!0;try{const s=await a.validate(m);return R(s.isValid)?await s.isValid:s.isValid}catch{return!1}}},{action:k}=__STORYBOOK_MODULE_ACTIONS__,M=k("submit"),x={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[W.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Integrations/React Hook Form/PasswordCreationField",component:c,render:()=>{const e=async s=>{await F(1e3),M(s)},a=f({defaultValues:{user:""}}),m=O();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(T,{children:[r.jsx(m,{name:"user",rules:{required:!0},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsx(q,{children:r.jsx(o,{type:"submit",children:"Submit"})})]})})}},d={},l={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(c,{rules:{required:!0,validate:I(x)},name:"password",children:r.jsxs(n,{validationPolicy:x,children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(o,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(o,{type:"submit",children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return v.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"}),r.jsx(A,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})]})}},p={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(o,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(o,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(o,{type:"submit",children:"Submit"})]})}};var b,P,j;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(j=(P=d.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var w,y,B;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
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
        validate: generatePasswordCreationFieldValidation(policyDecl)
      }} name="password">
          <PasswordCreationField validationPolicy={policyDecl}>
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
        </Field>
        <br />
        <Button onPress={() => form.reset()}>Reset</Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(B=(y=l.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var g,S,E;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <PasswordCreationField>
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
        </Field>
        <PasswordCreationField defaultValue={""} isInvalid>
          <Label>Password</Label>
          <Button>asd</Button>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </PasswordCreationField>
        <PasswordCreationField defaultValue={""}>
          <Label>Password</Label>
          <Button>asd</Button>
        </PasswordCreationField>
      </Form>;
  }
}`,...(E=(S=u.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var C,V,L;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <PasswordCreationField>
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("field", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("field")}>
          focus through form
        </Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(L=(V=p.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};const ue=["Default","WithForm","WithFieldError","WithFocus"];export{d as Default,u as WithFieldError,p as WithFocus,l as WithForm,ue as __namedExportsOrder,le as default};
