import{j as r}from"./iframe-Mcl-fp9_.js";import{u as H,a0 as S,Z as b,E as v,a1 as B}from"./IconWarning-Lyb53OnO.js";import{L as m}from"./Link-C_b4hIEx.js";import{H as s}from"./HeaderNavigation-DZgpSPDv.js";import{B as o}from"./Button-DAKl4AvN.js";import{T as p}from"./Text-DEIveL77.js";import{I as C}from"./Image-BLHzjilP.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-BmRdKASG.js";import{a as y,C as A,M as c}from"./ContextMenuContent-BKAALIDh.js";import"./ContextMenuSection-jJLrD2Vg.js";import{a as D,M as E}from"./Modal-Mz8kexv5.js";import{H as G}from"./Heading-D8xlpH_x.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D0Qkc9VN.js";import"./mergeRefs-C2rjSGvQ.js";import"./index-LMMmju_F.js";import"./useLocalizedStringFormatter-T_IfcqNQ.js";import"./context-BorfhQA_.js";import"./utils-n1fDyKZ3.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-CSmiIi-0.js";import"./useFocus-SsmNYjih.js";import"./useFocusRing-Dg3YPgxl.js";import"./useFocusable-CVnYh69T.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-COEYl7Pk.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-B-ha5P18.js";import"./ProgressBar-B-0Imi_2.js";import"./Label-FMQv6veW.js";import"./Hidden-0mHYsG9Y.js";import"./useLabel-DPxX2fH3.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BsWVSY18.js";import"./EmulatedBoldText-yaK_s2Yh.js";import"./Text-DoGyCRc9.js";import"./AlertIcon-D_6BAvkZ.js";import"./Action-C_mGnw8t.js";import"./context-UATQnsvR.js";import"./useStatic-DehluLPa.js";import"./getActionGroupSlot-DpUkVKXY.js";import"./Popover-BWEYPO_l.js";import"./DialogTriggerView-4ZuKOHwK.js";import"./Dialog-Dbuy5IKg.js";import"./RSPContexts-D5Q6Wlej.js";import"./OverlayArrow-BjKZColU.js";import"./useControlledState-ECxCAN2t.js";import"./Collection-JtFNZJGn.js";import"./CollectionBuilder-B60nQQtd.js";import"./Separator-BOJM7lM-.js";import"./Group-IKUML2BV.js";import"./SearchField-CkC64XB4.js";import"./FieldError-BKKPCq9e.js";import"./Form-W-5ctzVT.js";import"./useTextField-DMad38Mh.js";import"./useFormReset-2GD2k0-b.js";import"./TextField-Cz-aJsxu.js";import"./useEvent-C1BmSmac.js";import"./SelectionManager-BByY8zyt.js";import"./useCollator-BtrL4jRN.js";import"./FocusScope-D7ZuSfg7.js";import"./VisuallyHidden-CZ8WB-4E.js";import"./Switch-Gfej1iPg.js";import"./Label-DVdBQme9.js";import"./useToggleState-IS42vMnF.js";import"./Overlay-CU6XQaLd.js";import"./ButtonView-BdjHJ8X7.js";import"./Heading-D7y61Lsk.js";const Xr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,k;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const Yr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Yr as __namedExportsOrder,Xr as default};
