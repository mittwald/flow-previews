import{j as r,r as x}from"./iframe-BoCc-iJU.js";import{u as l,F as a}from"./Form-B53eFlWd.js";import{L as s}from"./Label-DGwnCcrv.js";import{B as t}from"./Button-XooD-Xiy.js";import{S as j}from"./Section-NRJmv6xi.js";import{A as S}from"./ActionGroup-Cq_e26ja.js";import{s as c}from"./Action-CKhPUoRP.js";import{F as m}from"./FileField-Dsp-O41S.js";import{F as b}from"./FieldError-gHUqbDM9.js";import{F as u,t as B}from"./Field-DT4WU7wb.js";import{R as d}from"./ResetButton-1ZvDQoFd.js";import{S as p}from"./SubmitButton-CJxf1GR5.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-BzlHG3zD.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-aIKmACWg.js";import"./index-U3eHMBln.js";import"./index-CpJJlR3B.js";import"./useLocalizedStringFormatter-CGHFzKy5.js";import"./context-BrFrKL-P.js";import"./Label-E_BXoGJl.js";import"./utils-P0pc5_a9.js";import"./Hidden-7MHP_c1E.js";import"./IconApp-C2RMdkv5.js";import"./remote-DSbtRD5R.js";import"./IconX-CkgsTx4p.js";import"./IconCheck-B8A9P0y2.js";import"./Text-CxsQklp2.js";import"./EmulatedBoldText-CBFTpxXk.js";import"./Text-CwFr0z0b.js";import"./LoadingSpinner-MhY_zuYj.js";import"./ariaLive-DBfYrca8.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-D6UvikyC.js";import"./ProgressBar-2FpoVhjA.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-msUyYt71.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C11Qnu-9.js";import"./useFocus-Cge5HK5z.js";import"./useFocusRing-GN2tGneZ.js";import"./useFocusable-C7xRBGe6.js";import"./ContextMenuSection-DJIIq9GL.js";import"./lib-90ocxLs-.js";import"./Dialog-CZPzdPg7.js";import"./RSPContexts-ZqX2hjEE.js";import"./OverlayArrow-BflVffdz.js";import"./useControlledState-Bp_HlHxi.js";import"./Collection-CTIB5Yac.js";import"./CollectionBuilder-pq_KYGFA.js";import"./SelectionIndicator-DXYS_YB1.js";import"./Separator-MSKztmUd.js";import"./SelectionManager-gKDO3ABG.js";import"./useEvent-2MJ1vmf8.js";import"./useCollator-8xA0jmsd.js";import"./FocusScope-DAKoy3Tt.js";import"./VisuallyHidden-Dalv-eS5.js";import"./dynamic-CBUiQ56u.js";import"./getActionGroupSlot-B7nGnNh4.js";import"./useStatic-BIG45Iee.js";import"./context-xz8cKbOL.js";import"./useFormValidation-DSNLWRBM.js";import"./FieldError-Cv1yZmyj.js";import"./Input-BVdlr_HZ.js";import"./useFieldComponent-BP-lIfvD.js";import"./IconDanger-CyJfzsCE.js";import"./useRef-DM9KQBRC.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),Tr={title:"Integrations/React Hook Form/FileField",component:u,render:()=>{const e=async h=>{await c(5e3),y(h)},f=l({defaultValues:{user:""}}),F=B();return r.jsx(a,{form:f,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(F,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(S,{children:[r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})]})})}},o={},i={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(u,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(b,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(a,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(u,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
          <FileField multiple>
            <Label>Certificate</Label>
            <Button variant="outline" color="secondary">
              Select
            </Button>
          </FileField>
        </Field>
        <FileField multiple isInvalid>
          <Label>Certificate</Label>
          <Button variant="outline" color="secondary">
            Select
          </Button>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </FileField>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <FileField multiple>
            <Label>Certificate</Label>
            <Button variant="outline" color="secondary">
              Select
            </Button>
          </FileField>
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
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};const kr=["Default","WithFieldError","WithFocus"];export{o as Default,i as WithFieldError,n as WithFocus,kr as __namedExportsOrder,Tr as default};
