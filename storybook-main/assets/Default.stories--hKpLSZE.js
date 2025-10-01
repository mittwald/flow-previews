import{j as r}from"./iframe-FESji9AM.js";import{t as H,a0 as S,Z as b,E as v,a1 as C}from"./IconWarning-BN848dMt.js";import{L as m}from"./Link-iiRu8NM4.js";import{H as s}from"./HeaderNavigation-DCY8vF7c.js";import{B as o}from"./Button-BAxmgeRc.js";import{T as p}from"./Text-BCUZ6o5_.js";import{I as B}from"./Image-DuYimMe-.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-DKYtMob5.js";import{C as y,M as c}from"./MenuItem-CG21a8Ux.js";import{C as A}from"./ContextMenuTrigger-sHbJF-bE.js";import"./ContextMenuSection-B7y0wjj1.js";import{a as D,M as E}from"./Modal-64F33tWB.js";import{H as G}from"./Heading-BU3RGcV8.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DFQAJ_2B.js";import"./index-BqyXU5kt.js";import"./index-ChCUOHR4.js";import"./useLocalizedStringFormatter-CqB2I62z.js";import"./context-ChjkYhaK.js";import"./utils-C8mGBIgx.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-CLpB9Wju.js";import"./useFocus-Bhqj5rOY.js";import"./useFocusRing-zSoWzuoi.js";import"./useFocusable-C4O-U4lE.js";import"./dynamic-CUTbtcza.js";import"./LoadingSpinner-BczKcQ8x.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BW1fAfFv.js";import"./ProgressBar-BtYyhcda.js";import"./Label-DTEJhL1C.js";import"./Hidden-EsiqW7jM.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CzqLgnVu.js";import"./EmulatedBoldText-DW2sem56.js";import"./Text-CpJktiaj.js";import"./AlertIcon-Cf3ZGs7y.js";import"./Action-CrJdyVja.js";import"./context-igvBEEcT.js";import"./useStatic-JqJXV1dT.js";import"./getActionGroupSlot-yK4DsrgL.js";import"./Popover-P9L7ar1v.js";import"./useOverlayController-DwbSSGzq.js";import"./OverlayContextProvider-W9DcC5Hl.js";import"./Dialog-CXSXfPFc.js";import"./RSPContexts-DiZSnWK-.js";import"./OverlayArrow-8xtTBq8b.js";import"./useControlledState-GWuXrIJ_.js";import"./Collection-5dsgZq8H.js";import"./CollectionBuilder-CIsMqzLE.js";import"./context-BElELkmV.js";import"./Separator-C3QdnVt7.js";import"./SelectionManager-CZcnEcDm.js";import"./useEvent-CA4CrZH2.js";import"./useCollator-B71GfqqY.js";import"./FocusScope-DVksIqcF.js";import"./VisuallyHidden-CxIvQbp6.js";import"./ClearPropsContextView-NtUgrnKO.js";import"./Switch-B25Ef6Gc.js";import"./useMakeFocusable-BMtXa_-B.js";import"./useToggleState-BMpx7Vky.js";import"./useFormReset-B3Fww5Tk.js";import"./OverlayTrigger-BuHoV7ty.js";import"./ControlledNotification-_DemG6tF.js";import"./DialogTriggerView-hXNF9SVG.js";import"./Overlay-C7sNQMFk.js";import"./ButtonView-DHxudGRi.js";import"./Heading-aIRtuq7k.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(A,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(B,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(y,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const $r=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,$r as __namedExportsOrder,Yr as default};
