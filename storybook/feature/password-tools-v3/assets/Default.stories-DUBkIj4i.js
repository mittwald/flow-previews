import{j as r}from"./iframe-DaJUcpT8.js";import{t as H,$ as S,X as b,J as v,a0 as B}from"./IconWarning-Di7G1N2l.js";import{L as m}from"./Link-SxlJruch.js";import{H as s}from"./HeaderNavigation-BOkehLzK.js";import{B as o}from"./Button-VCV9ziEp.js";import{T as p}from"./Text-onzY52Lv.js";import{I as C}from"./Image-h24ZapGE.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-BDEmUWxE.js";import{a as y,C as A,M as c}from"./ContextMenuContent-DiMDR2u1.js";import"./ContextMenuSection-BK2iLm4R.js";import{a as D,M as G}from"./Modal-QkO7ptfl.js";import{H as E}from"./Heading-CvGa7ST0.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-ADMZzlWa.js";import"./mergeRefs-BEqFWw_4.js";import"./index-D3N8NcCI.js";import"./useLocalizedStringFormatter-DgJlXYZm.js";import"./context-BvSX8hdd.js";import"./utils-cm5Xkl-u.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-CEpf8EyH.js";import"./useFocus-BmgQs_EM.js";import"./useFocusRing-BGPs1fr9.js";import"./useFocusable-BAN9nHDM.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-8zd3RGCO.js";import"./Button-BRzam8Ar.js";import"./ProgressBar-Cnbrmi-n.js";import"./Label-CVkBl_Lv.js";import"./Hidden-DcO9dlXt.js";import"./useLabel-prd9XZsG.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-kRBy5Vjm.js";import"./EmulatedBoldText-Dp6a6rFz.js";import"./Text-D1R_5zV7.js";import"./AlertIcon-0d0KI50x.js";import"./Action-3tEpttEY.js";import"./context-nDH_4RW_.js";import"./useStatic-llywhH4U.js";import"./getActionGroupSlot-Cdl7NAJL.js";import"./Popover-C3BJJ-PT.js";import"./DialogTriggerView-CfzLhP0J.js";import"./Dialog-D9LWMemg.js";import"./RSPContexts-hBgp-JuF.js";import"./OverlayArrow-CK2mB8Cb.js";import"./useControlledState-CRRDqDT-.js";import"./Collection-Wdd3SW29.js";import"./CollectionBuilder-Bz5wg4gw.js";import"./Separator-DuKCDsxL.js";import"./Group-DcjqWYxF.js";import"./SearchField-UXIbzWx2.js";import"./FieldError-CSXHy091.js";import"./Form-68wNlegC.js";import"./useTextField-D2U5Ytm3.js";import"./useFormReset-wR0NNvKg.js";import"./TextField-Usv5aNlb.js";import"./useEvent-rPQ2UWvx.js";import"./SelectionManager-WCXi6IP8.js";import"./useCollator-CWhSIfWE.js";import"./FocusScope-DS_o-PRb.js";import"./VisuallyHidden-DvK-wDtX.js";import"./Switch-DW6Npl-c.js";import"./Label-BgQXylnn.js";import"./useToggleState-BkIjbouE.js";import"./Overlay-Dxxa7mLr.js";import"./Header-C_FEoVTv.js";import"./ButtonView-x4MVKHQc.js";import"./Heading-B0zWjGO2.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(E,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const Zr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Zr as __namedExportsOrder,Yr as default};
