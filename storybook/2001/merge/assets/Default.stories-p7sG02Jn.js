import{r as x,j as e}from"./iframe-DyMBbPqz.js";import{F as t}from"./FileDropZone-Bo91_Pal.js";import{S as u}from"./Section-VQ6ADGlu.js";import{F}from"./FileCardList-BSnKbAJA.js";import{F as f}from"./FileCard-U2qUNyUo.js";import{u as E,F as W,t as G}from"./Form-Dk1rGsGb.js";import{B as s}from"./Button-BlPqNUGj.js";import{A as M}from"./ActionGroup-DC22WOZm.js";import{_ as j,$ as q}from"./IconWarning-ZZpE0RLv.js";import{H as g}from"./Heading-CGGLd8uz.js";import{F as h}from"./FileField-C14_-kou.js";import{T as v}from"./Text-CukGSnAt.js";import"./IllustratedMessage-OcUr5RZW.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D5JFbFDv.js";import"./mergeRefs-DzqYcA-L.js";import"./index-DOr1CDfn.js";import"./utils-CVBG1xQY.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CM2C2q3t.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-_qDqqXns.js";import"./useFocus-DU8oSjU-.js";import"./useCollator-CddKm6Uk.js";import"./context-Da3l2mom.js";import"./useLocalizedStringFormatter-Bkn65txD.js";import"./Button-B4XEqpsk.js";import"./ProgressBar-78wlbF0l.js";import"./Label-BeoFpfOq.js";import"./Hidden-DDXBBs4Y.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D3aMe8WM.js";import"./useFocusRing-vfzYXE-6.js";import"./useFocusable-DC8rXwC1.js";import"./VisuallyHidden-CSYVn4hw.js";import"./ContextMenuSection-DXhxkGIi.js";import"./Action-BKD54bOg.js";import"./context-57hv7F4C.js";import"./useStatic-D-Em2Ifs.js";import"./browser-n8MK_CxL.js";import"./getActionGroupSlot-D4TTw5G_.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-CGM20lGa.js";import"./RSPContexts-BQIv_6Ah.js";import"./OverlayArrow-LvdRNExG.js";import"./useControlledState-D80JYNPC.js";import"./Collection-BmjshBTi.js";import"./CollectionBuilder-CRQRCBBG.js";import"./Separator-VLOdIwGI.js";import"./Group-C7CCq00M.js";import"./SearchField-Bdf4_ahw.js";import"./FieldError-rzK-dnZK.js";import"./Form-XPOYZQVX.js";import"./useTextField-BufQoHeE.js";import"./useFormReset-BRpdsPso.js";import"./TextField-COySyIxF.js";import"./useEvent-65UMilnF.js";import"./SelectionManager-S-Cyaza4.js";import"./FocusScope-D43MAOt-.js";import"./ColumnLayout-CT1FeNRv.js";import"./Avatar-iwtq4uNN.js";import"./AlertIcon-BGQeThm8.js";import"./Image-CBAyerJk.js";import"./Link-k0csAJr-.js";import"./ButtonView-DZXCHDoj.js";import"./ContextMenuContent-Dr7c23xH.js";import"./Popover-DeFJzkTr.js";import"./DialogTriggerView-DxOJ-uUS.js";import"./Switch-odSb2V0f.js";import"./Label-CTeGDG4_.js";import"./useToggleState-DyUKzIEF.js";import"./FieldError-DTsDdte6.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-zaoUk7MO.js";import"./Heading-DRXAMfzE.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-xvO4zYSH.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,gr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...n??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...n??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...n??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const n=E(),i=G();return e.jsxs(W,{form:n,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...n.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(b=(O=m.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};var B,L,H;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,_,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    accept: "image/png"
  },
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    return <Section>
        <FileDropZone {...props} onChange={setFiles}>
          <IconImage />
          <Heading>Drop image</Heading>
          <Text>Only image/png images are allowed.</Text>
          <FileField name="file" onChange={setFiles}>
            <Button>Select image</Button>
          </FileField>
        </FileDropZone>
        <FileCardList>
          {[...(files ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
        </FileCardList>
      </Section>;
  }
}`,...(I=(_=p.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var R,T,Z;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    multiple: true
  },
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    return <Section>
        <FileDropZone {...props} onChange={setFiles}>
          <IconUpload />
          <Heading>Drop files</Heading>
          <FileField name="file" onChange={setFiles}>
            <Button>Select files</Button>
          </FileField>
        </FileDropZone>
        <FileCardList>
          {[...(files ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
        </FileCardList>
      </Section>;
  }
}`,...(Z=(T=c.parameters)==null?void 0:T.docs)==null?void 0:Z.source}}};var k,U,w;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: props => {
    const form = useForm<{
      file: FileList | null;
    }>();
    const Field = typedField(form);
    return <Form form={form} onSubmit={submitAction}>
        <Section>
          <FileDropZone {...props} onChange={f => form.setValue("file", f)}>
            <IconUpload />
            <Heading>Drop file</Heading>
            <Field name="file" rules={{
            required: "Please choose a file"
          }}>
              <FileField>
                <Button variant="outline" color="dark">
                  Select file
                </Button>
              </FileField>
            </Field>
          </FileDropZone>

          <FileCardList>
            {[...(form.watch("file") ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
          </FileCardList>
        </Section>
        <ActionGroup>
          <Button type="submit">Upload</Button>
        </ActionGroup>
      </Form>;
  }
}`,...(w=(U=d.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};const hr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Disabled,c as Multiple,l as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,hr as __namedExportsOrder,gr as default};
