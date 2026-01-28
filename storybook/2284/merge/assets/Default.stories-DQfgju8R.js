import{j as r}from"./iframe-BbsOAs33.js";import{q as d,a1 as l,_ as g,u,a2 as x}from"./IconWarning-BG17vbyg.js";import{L as m}from"./Link-CZ64J4jt.js";import{H as s}from"./HeaderNavigation-DqI_9xoR.js";import{B as o}from"./Button-CAGXh9YY.js";import{T as p}from"./Text-BYxWYBBY.js";import{I as h}from"./Image-LPw_4sIz.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-ByU92Suh.js";import{C as M,M as c}from"./ContextMenu-Dg-dsMVY.js";import{C as I}from"./ContextMenuTrigger-CNa88teJ.js";import"./ContextMenuSection-Dt_P0EQ4.js";import{a as T,M as k}from"./Modal-D-8onKfq.js";import{H}from"./Heading-BC6iu52J.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CnY6R6y_.js";import"./index-hsH483Jp.js";import"./index-32jMpZgo.js";import"./remote-DIEpRnMd.js";import"./useLocalizedStringFormatter-Cn9pdCjE.js";import"./context-DDHwgpv7.js";import"./utils-d4vW56Wr.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-8sJeBC00.js";import"./usePress-CuEkD-Mt.js";import"./useFocusRing-B8FmEpoX.js";import"./useFocusable-CRykt1O9.js";import"./dynamic-CoVYgUcD.js";import"./LoadingSpinner-CNcanuZc.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-tZHGwxXU.js";import"./ProgressBar-GthXoJbW.js";import"./Label-jCbgdnWR.js";import"./Hidden-C9ZrqSun.js";import"./useLabel-BZoz0BQC.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-6_CJeJSO.js";import"./EmulatedBoldText-Bt8Ku6uY.js";import"./Text-C1_k2kAR.js";import"./AlertIcon-B34gK9Vj.js";import"./Switch-BVNfvCEp.js";import"./useFieldComponent-c0I5eEtM.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CquJo8pa.js";import"./useFormReset-eAh5gylf.js";import"./useControlledState-QxMMjnNS.js";import"./VisuallyHidden-D-GMXsu-.js";import"./Dialog-Ch_CeJ5E.js";import"./RSPContexts-DfamIfkg.js";import"./OverlayArrow-N6t0bVoH.js";import"./Collection-Bp73NzW5.js";import"./CollectionBuilder-BFwWw2AW.js";import"./SelectionIndicator-Da0zjLKe.js";import"./Separator-Qwz2H95Y.js";import"./SelectionManager-BdWPcNcZ.js";import"./useEvent-kpAjV35P.js";import"./useCollator-Ac8UQMZt.js";import"./FocusScope-tc_BWGmQ.js";import"./Action-BXhMVvh_.js";import"./context-_vxrJXzy.js";import"./useStatic-PZIJlmDl.js";import"./getActionGroupSlot-DqvhX6L8.js";import"./Popover-BeKDLuBK.js";import"./useOverlayController-DeIZdXjQ.js";import"./OverlayContextProvider-Byu7izWK.js";import"./OverlayTrigger-C8Sbeft1.js";import"./DialogTriggerView-B6qe7p1v.js";import"./Overlay-BEKJ7ULf.js";import"./ButtonView-BQhPvsO2.js";import"./Flex-C7RVY7SQ.js";import"./Heading-Delp_XvT.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: props => <HeaderNavigation aria-label="Header navigation" {...props}>
      <Button>
        <IconSearch />
      </Button>
      <Button>
        <IconSupport />
      </Button>
      <ModalTrigger>
        <Button>
          <IconNotification />
        </Button>
        <Modal>
          <Heading>Notifications</Heading>
        </Modal>
      </ModalTrigger>
      <ContextMenuTrigger>
        <Button>
          <Avatar>
            <Image alt="Gopher" src={dummyText.imageSrc} />
          </Avatar>
        </Button>
        <ContextMenu>
          <MenuItem>
            <IconSettings />
            <Text>Profile</Text>
          </MenuItem>
          <MenuItem>
            <IconLogout />
            <Text>Logout</Text>
          </MenuItem>
        </ContextMenu>
      </ContextMenuTrigger>
    </HeaderNavigation>
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...n.parameters?.docs?.source}}};const zr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,zr as __namedExportsOrder,wr as default};
